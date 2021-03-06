///////////////////////////////////////////////////////////////////////////
// Main game system and API implementations

let mode: string

let limitKeys: string[]
let lastKey: string
window.addEventListener('keydown', (e: KeyboardEvent) => {
  if (mode !== 'waitKey') return
  if (limitKeys && limitKeys.indexOf(e.key) < 0) return
  lastKey = e.key
  mode = 'normal'
  limitKeys = null
})

let luminance: number
function updateLuminance () {
  const e = document.getElementById('inn-content')
  e.style.background = `rgb(${luminance}, ${luminance}, ${luminance})`
}

function message (msg: string) {
  const e = document.createElement('div') as HTMLDivElement
  e.textContent = msg
  document.getElementById('inn-content').appendChild(e)
}

let waitingFrames: number

let request: number = null

export function start () {
  mode = 'normal'
  limitKeys = null
  lastKey = null
  luminance = 255
  updateLuminance()
  waitingFrames = 0
  document.getElementById('inn-content').innerHTML = ''

  let iter = inn()
  let frame = 0

  function update () {
    request = null

    let isAlive = true
    const e = document.getElementById('inn-content')
    e.classList.remove('showCursor')
    switch (mode) {
      case 'waitKey':
        if (frame % 60 < 30) {
          e.classList.add('showCursor')
        }
        break

      case 'waitFrame':
        waitingFrames--
        if (waitingFrames <= 0) {
          mode = 'normal'
        }
        break

      case 'waitFadeOut':
        luminance -= 5
        if (luminance <= 0) {
          luminance = 0
          mode = 'normal'
        }
        updateLuminance()
        break

      case 'waitFadeIn':
        luminance += 5
        if (255 <= luminance) {
          luminance = 255
          mode = 'normal'
        }
        updateLuminance()
        break

      default:
        let r = iter.next()
        if (r.value) mode = r.value
        isAlive = !r.done
    }
    frame++
    if (isAlive) {
      request = requestAnimationFrame(update)
    }
  }

  request = requestAnimationFrame(update)
}

export function stop () {
  if (request) cancelAnimationFrame(request)
  request = null
}

///////////////////////////////////////////////////////////////////////////
// Helpers

function* waitKey (keys?: string[]): IterableIterator<string> {
  limitKeys = keys
  yield 'waitKey'
  return lastKey
}

function* waitFrame (f: number): IterableIterator<string> {
  waitingFrames = f
  yield 'waitFrame'
}

function* waitFadeOut (): IterableIterator<string> {
  yield 'waitFadeOut'
}

function* waitFadeIn (): IterableIterator<string> {
  yield 'waitFadeIn'
}

///////////////////////////////////////////////////////////////////////////
// Scenario implementations

function* inn (): Iterator<string> {
  message('Welcome to the traveler\'s Inn.')
  message('Room and board is 6 GOLD per night.')
  message('Dost thou want a room? (Y/N)')
  const key = yield* waitKey(['y', 'n'])

  if (key === 'y') {
    message('Good night.')
    yield* waitFrame(30)
    yield* waitFadeOut()
    yield* waitFrame(30)
    // player.money -= 6
    // player.hp = player.maxHP
    // player.mp = player.maxMP
    yield* waitFadeIn()
    message('Good morning.')
    message('Thou hast had a good night\'s sleep I hope.')
    yield* waitKey()
  }

  message('I shall see thee again.')
  yield* waitKey()
}
