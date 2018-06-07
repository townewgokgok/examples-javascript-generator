const bpm = 160 // tempo
const n8 = Math.round(60 * 60 / bpm / 2) // frame count of 8th note
const n4 = n8 * 2
const n4d = n8 * 3
const n1 = n8 * 8

interface MessageFrame {
  text?: string
  wait?: number
}

function* maryHadA (): IterableIterator<MessageFrame> {
  yield { text: 'Ma', wait: n4d } // `resume()` returns this value and
                                  // wait `n4d` frames with suspending here
  yield { text: 'ry ', wait: n8 }
  yield { text: 'had ', wait: n4 }
  yield { text: 'a ', wait: n4 }
}

function* littleLamb (withoutRest?: boolean): IterableIterator<MessageFrame> {
  yield { text: 'lit', wait: n4 }
  yield { text: 'tle ', wait: n4 }
  yield { text: 'lamb ', wait: n4 }
  if (!withoutRest) {
    yield { wait: n4 }
  }
}

function* maryHadALittleLamb (): IterableIterator<MessageFrame> {
  yield* maryHadA() // To go to another iterator and come back, just yield it
  yield* littleLamb()
  yield* littleLamb()
  yield* littleLamb()
  yield* maryHadA()
  yield* littleLamb(true)
  yield { text: 'its ', wait: n4 }
  yield { text: 'fleece ', wait: n4 }
  yield { text: 'was ', wait: n4 }
  yield { text: 'white ', wait: n4 }
  yield { text: 'as ', wait: n4 }
  yield { text: 'snow ', wait: n1 }
}

let request: number = null

export function start () {
  const textarea = document.getElementById('basic-textarea') as HTMLTextAreaElement
  textarea.textContent = ''

  const iter = maryHadALittleLamb()
  let waitFrames = 0

  function update () {
    let isAlive = true
    if (--waitFrames <= 0) {
      const v = iter.next()
      if (v.value) {
        if (v.value.text) {
          textarea.textContent += v.value.text
        }
        waitFrames = v.value.wait
      }
      isAlive = !v.done
    }
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
