parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({11:[function(require,module,exports) {
"use strict";var e,n,t,r,a,o=this&&this.__generator||function(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(a=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[0,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},i=this&&this.__values||function(e){var n="function"==typeof Symbol&&e[Symbol.iterator],t=0;return n?n.call(e):{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}};function u(){document.getElementById("inn-content").style.background="rgb("+r+", "+r+", "+r+")"}function s(e){var n=document.createElement("div");n.textContent=e,document.getElementById("inn-content").appendChild(n)}Object.defineProperty(exports,"__esModule",{value:!0}),window.addEventListener("keydown",function(r){"waitKey"===e&&(n&&n.indexOf(r.key)<0||(t=r.key,e="normal",n=null))});var c=null;function l(){e="normal",n=null,t=null,r=255,u(),a=0,document.getElementById("inn-content").innerHTML="";var o=w(),i=0;c=requestAnimationFrame(function n(){c=null;var t=!0,s=document.getElementById("inn-content");switch(s.classList.remove("showCursor"),e){case"waitKey":i%60<30&&s.classList.add("showCursor");break;case"waitFrame":--a<=0&&(e="normal");break;case"waitFadeOut":(r-=5)<=0&&(r=0,e="normal"),u();break;case"waitFadeIn":255<=(r+=5)&&(r=255,e="normal"),u();break;default:var l=o.next();l.value&&(e=l.value),t=!l.done}i++,t&&(c=requestAnimationFrame(n))})}function d(){c&&cancelAnimationFrame(c),c=null}function f(e){return o(this,function(r){switch(r.label){case 0:return n=e,[4,"waitKey"];case 1:return r.sent(),[2,t]}})}function h(e){return o(this,function(n){switch(n.label){case 0:return a=e,[4,"waitFrame"];case 1:return n.sent(),[2]}})}function m(){return o(this,function(e){switch(e.label){case 0:return[4,"waitFadeOut"];case 1:return e.sent(),[2]}})}function b(){return o(this,function(e){switch(e.label){case 0:return[4,"waitFadeIn"];case 1:return e.sent(),[2]}})}function w(){return o(this,function(e){switch(e.label){case 0:return s("Welcome to the traveler's Inn."),s("Room and board is 6 GOLD per night."),s("Dost thou want a room? (Y/N)"),[5,i(f(["y","n"]))];case 1:return"y"!==e.sent()?[3,7]:(s("Good night."),[5,i(h(30))]);case 2:return e.sent(),[5,i(m())];case 3:return e.sent(),[5,i(h(30))];case 4:return e.sent(),[5,i(b())];case 5:return e.sent(),s("Good morning."),s("Thou hast had a good night's sleep I hope."),[5,i(f())];case 6:e.sent(),e.label=7;case 7:return s("I shall see thee again."),[5,i(f())];case 8:return e.sent(),[2]}})}exports.start=l,exports.stop=d;
},{}],38:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,i){void 0===t&&(t=0),void 0===i&&(i=0),this.x=t,this.y=i}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.size=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.add=function(i){return new t(this.x+i.x,this.y+i.y)},t.prototype.sub=function(i){return new t(this.x-i.x,this.y-i.y)},t.prototype.mul=function(i){return new t(this.x*i,this.y*i)},t.prototype.div=function(i){return new t(this.x/i,this.y/i)},t.prototype.normalize=function(){return this.div(this.size())},t.prototype.rotate=function(i){var e=Math.cos(i),n=Math.sin(i);return new t(this.x*e-this.y*n,this.x*n+this.y*e)},t.prototype.lerp=function(i,e){return new t(this.x*(1-e)+i.x*e,this.y*(1-e)+i.y*e)},t}();exports.default=t;
},{}],12:[function(require,module,exports) {
"use strict";var e=this&&this.__generator||function(e,t){var n,r,u,o,l={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(u=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(u=u.call(r,o[1])).done)return u;switch(r=0,u&&(o=[0,u.value]),o[0]){case 0:case 1:u=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(u=(u=l.trys).length>0&&u[u.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){l.label=o[1];break}if(6===o[0]&&l.label<u[1]){l.label=u[1],u=o;break}if(u&&l.label<u[2]){l.label=u[2],l.ops.push(o);break}u[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},t=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r,u=n(require("./vector")),o=null;function l(){r=[H()],o=requestAnimationFrame(function e(){for(var t=0,n=r;t<n.length;t++)n[t].next();o=requestAnimationFrame(e)})}function i(){o&&cancelAnimationFrame(o),o=null,r=[],m()}function a(){var e=document.getElementById("guide-form-title");document.getElementById("guide-preview-title").textContent=e.value}function s(){var e=parseFloat(document.getElementById("guide-form-color-r").value),t=parseFloat(document.getElementById("guide-form-color-g").value),n=parseFloat(document.getElementById("guide-form-color-b").value);document.getElementById("guide-preview").style.backgroundColor="rgb("+e+", "+t+", "+n+")"}function c(){document.getElementById("guide-dialog").style.display="block"}function d(){document.getElementById("guide-dialog").style.display="none"}function f(){document.getElementById("guide-cursor").style.display="block"}function g(){document.getElementById("guide-cursor").style.display="none"}function m(){document.getElementById("guide-message").style.display="none",d(),g(),x()}function y(e,t){var n=k(),r=document.elementFromPoint(e.x-window.pageXOffset,e.y-window.pageYOffset);for(n();r&&"example-guide"!==r.id;)t?r.classList.add("hover"):r.classList.remove("hover"),r=r.parentElement}function p(e,t,n){var r=document.getElementById(e);null==t&&(t=.5),null==n&&(n=.5);var o=r.getBoundingClientRect();return new u.default(window.pageXOffset+o.left+o.width*t,window.pageYOffset+o.top+o.height*n)}exports.start=l,exports.stop=i,document.getElementById("guide-form-title").addEventListener("input",a),document.getElementById("guide-form-color-r").addEventListener("input",s),document.getElementById("guide-form-color-g").addEventListener("input",s),document.getElementById("guide-form-color-b").addEventListener("input",s),document.getElementById("guide-open").addEventListener("click",c),document.getElementById("guide-form-ok").addEventListener("click",d);var h=12;function v(e,t){var n=document.getElementById(e);null==t&&(t=parseFloat(n.value));var r=n.getBoundingClientRect(),o=r.width-h,l=parseFloat(n.min),i=(t-l)/(parseFloat(n.max)-l);return new u.default(window.pageXOffset+r.left+.5*h+o*i,window.pageYOffset+r.top+.5*r.height)}function b(e,t){var n=document.getElementById(e),r=n.getBoundingClientRect(),u=r.width-h,o=window.pageXOffset+r.left+.5*h,l=Math.max(0,Math.min((t-o)/u,1)),i=parseFloat(n.min),a=parseFloat(n.max);n.value=""+(i+(a-i)*l)}var E=null;function w(e){var t=p("example-guide",0,0),n=e.sub(t),r=document.getElementById("guide-cursor");r.style.left=n.x+"px",r.style.top=n.y+"px",E&&y(E,!1),y(e,!0),E=e.clone()}function B(e){var t=document.getElementById("guide-message");t.textContent=e,t.style.display="block"}function I(){document.getElementById("guide-blocker").style.display="block"}function x(){document.getElementById("guide-blocker").style.display="none"}function k(){var e=document.getElementById("guide-blocker"),t=e.style.display;return e.style.display="none",function(){e.style.display=t}}function F(e){return e*e*e}function C(e){return 1-F(1-e)}function O(e){return.5<e?1-O(1-e):.5*F(2*e)}var _=30,L=120,M=15,S=.15,R=20,T=4,X=30,Y=["JavaScript tutorial","My diary"],q=[[128,192,255],[255,255,128]],z=0;function A(t){return e(this,function(e){switch(e.label){case 0:return 0<t--?[4]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}function G(t,n){var r,u,o,l,i,a;return e(this,function(e){switch(e.label){case 0:r=E.clone(),u=t.sub(r).size(),o=Math.ceil(M+u*S),l=1,e.label=1;case 1:return l<o?(i=O(l/(o-1)),w(a=r.lerp(t,i)),n&&n(i,a),[4]):[3,4];case 2:e.sent(),e.label=3;case 3:return l++,[3,1];case 4:return w(t),n&&n(1,t),[4];case 5:return e.sent(),[2]}})}function K(n,r,u){return e(this,function(e){switch(e.label){case 0:return[5,t(G(v(n)))];case 1:return e.sent(),[5,t(G(v(n,r),function(e,t){b(n,t.x),u&&u()}))];case 2:return e.sent(),[2]}})}function P(n,r,u){var o,l;return e(this,function(e){switch(e.label){case 0:return(o=document.getElementById(n)).focus(),o.setSelectionRange(0,o.value.length),[5,t(A(R))];case 1:e.sent(),l=1,e.label=2;case 2:return l<=r.length?(o.value=r.substr(0,l),u&&u(o,o.value),[5,t(A(T))]):[3,5];case 3:e.sent(),e.label=4;case 4:return l++,[3,2];case 5:return[2]}})}function j(){r.push(function(){var t,n,r,u,o;return e(this,function(e){switch(e.label){case 0:t=p("example-guide",0,0),n=E.sub(t),(r=document.createElement("div")).classList.add("guide-click-effect"),document.getElementById("example-guide").appendChild(r),r.style.left=n.x+"px",r.style.top=n.y+"px",u=1,e.label=1;case 1:return u<=X?(o=C(u/X),r.style.transform="translate(-50%, -50%) scale("+o+", "+o+")",r.style.opacity=""+(1-o),[4]):[3,4];case 2:e.sent(),e.label=3;case 3:return u++,[3,1];case 4:return r.remove(),[2]}})}())}function D(){return e(this,function(e){switch(e.label){case 0:return"none"!==document.getElementById("guide-dialog").style.display?[3,2]:[4];case 1:return e.sent(),[3,0];case 2:return[2]}})}function J(){return e(this,function(e){switch(e.label){case 0:return"none"===document.getElementById("guide-dialog").style.display?[3,2]:[4];case 1:return e.sent(),[3,0];case 2:return[2]}})}function H(){var n,r;return e(this,function(e){switch(e.label){case 0:return m(),I(),w(p("example-guide")),f(),[5,t(A(_))];case 1:return e.sent(),B("To customize theme, click the gear icon at top-right."),[5,t(A(_))];case 2:return e.sent(),[5,t(G(p("guide-open")))];case 3:return e.sent(),[5,t(A(_))];case 4:return e.sent(),j(),c(),B("The settings dialog is appeared."),[5,t(A(L))];case 5:return e.sent(),B("Input your blog title."),[5,t(A(_))];case 6:return e.sent(),[5,t(G(p("guide-form-title",.9)))];case 7:return e.sent(),[5,t(A(_))];case 8:return e.sent(),n=Y[z%Y.length],j(),[5,t(P("guide-form-title",n,function(){return a()}))];case 9:return e.sent(),[5,t(A(_))];case 10:return e.sent(),B("Change background color."),[5,t(A(_))];case 11:return e.sent(),r=q[z%q.length],[5,t(K("guide-form-color-r",r[0],function(){return s()}))];case 12:return e.sent(),[5,t(K("guide-form-color-g",r[1],function(){return s()}))];case 13:return e.sent(),[5,t(K("guide-form-color-b",r[2],function(){return s()}))];case 14:return e.sent(),z++,[5,t(A(_))];case 15:return e.sent(),B('Click "OK" button.'),[5,t(A(_))];case 16:return e.sent(),[5,t(G(p("guide-form-ok")))];case 17:return e.sent(),[5,t(A(_))];case 18:return e.sent(),j(),d(),[5,t(A(L))];case 19:return e.sent(),g(),x(),B("Your turn now. Click the gear icon."),[5,t(D())];case 20:return e.sent(),B('Good. Cutomize your own blog and click "OK" button.'),[5,t(J())];case 21:return e.sent(),B("Excellent! This is the end of this tutorial."),[5,t(A(L))];case 22:return e.sent(),m(),[2]}})}
},{"./vector":38}],13:[function(require,module,exports) {
"use strict";var t=this&&this.__generator||function(t,e){var n,r,a,s,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(a=r[2&s[0]?"return":s[0]?"throw":"next"])&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[0,a.value]),s[0]){case 0:case 1:a=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,r=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(a=(a=u.trys).length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){u=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){u.label=s[1];break}if(6===s[0]&&u.label<a[1]){u.label=a[1],a=s;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(s);break}a[2]&&u.ops.pop(),u.trys.pop();continue}s=e.call(t,u)}catch(t){s=[6,t],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}},e=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=160,r=Math.round(3600/n/2),a=2*r,s=3*r,u=8*r;function i(){return t(this,function(t){switch(t.label){case 0:return[4,{text:"Ma",wait:s}];case 1:return t.sent(),[4,{text:"ry ",wait:r}];case 2:return t.sent(),[4,{text:"had ",wait:a}];case 3:return t.sent(),[4,{text:"a ",wait:a}];case 4:return t.sent(),[2]}})}function c(e){return t(this,function(t){switch(t.label){case 0:return[4,{text:"lit",wait:a}];case 1:return t.sent(),[4,{text:"tle ",wait:a}];case 2:return t.sent(),[4,{text:"lamb ",wait:a}];case 3:return t.sent(),e?[3,5]:[4,{wait:a}];case 4:t.sent(),t.label=5;case 5:return[2]}})}function o(){return t(this,function(t){switch(t.label){case 0:return[5,e(i())];case 1:case 2:case 3:return t.sent(),[5,e(c())];case 4:return t.sent(),[5,e(i())];case 5:return t.sent(),[5,e(c(!0))];case 6:return t.sent(),[4,{text:"its ",wait:a}];case 7:return t.sent(),[4,{text:"fleece ",wait:a}];case 8:return t.sent(),[4,{text:"was ",wait:a}];case 9:return t.sent(),[4,{text:"white ",wait:a}];case 10:return t.sent(),[4,{text:"as ",wait:a}];case 11:return t.sent(),[4,{text:"snow ",wait:u}];case 12:return t.sent(),[2]}})}var l=null;function f(){var t=document.getElementById("basic-textarea");t.textContent="";var e=o(),n=0;l=requestAnimationFrame(function r(){var a=!0;if(--n<=0){var s=e.next();s.value&&(s.value.text&&(t.textContent+=s.value.text),n=s.value.wait),a=!s.done}a&&(l=requestAnimationFrame(r))})}function w(){l&&cancelAnimationFrame(l),l=null}exports.start=f,exports.stop=w;
},{}],14:[function(require,module,exports) {
"use strict";var e=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},t=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=n(require("./vector")),o=300,i=new r.default(.3*o,.3*o),s=new r.default(.7*o,.3*o),a=new r.default(.7*o,.7*o),u=new r.default(.3*o,.7*o),l=3,c=function(){function n(e,t){this.style=e,this.pos=t.clone()}return n.prototype.move=function(t){var n,r,o,i,s;return e(this,function(e){switch(e.label){case 0:n=t.sub(this.pos),r=n.normalize(),o=r.mul(l),i=Math.ceil(n.size()/l),s=1,e.label=1;case 1:return s<i?(this.pos=this.pos.add(o),[4]):[3,4];case 2:e.sent(),e.label=3;case 3:return s++,[3,1];case 4:return this.pos=t.clone(),[4];case 5:return e.sent(),[2]}})},n.prototype.goRound=function(){return e(this,function(e){switch(e.label){case 0:return[5,t(this.move(s))];case 1:return e.sent(),[5,t(this.move(a))];case 2:return e.sent(),[5,t(this.move(u))];case 3:return e.sent(),[5,t(this.move(i))];case 4:return e.sent(),[3,0];case 5:return[2]}})},n.prototype.backAndForth=function(){return e(this,function(e){switch(e.label){case 0:return[5,t(this.move(a))];case 1:return e.sent(),[5,t(this.move(i))];case 2:return e.sent(),[3,0];case 3:return[2]}})},n.prototype.repaint=function(e){e.fillStyle=this.style,e.fillRect(this.pos.x-8,this.pos.y-8,16,16)},n}(),f=null;function h(){var e=document.getElementById("concurrent-canvas");e.width=o,e.height=o;var t=new c("red",i),n=new c("blue",i);var r=[t.goRound(t),n.backAndForth(n)];f=requestAnimationFrame(function i(){for(var s=0,a=r;s<a.length;s++)a[s].next();var u;(u=e.getContext("2d")).fillStyle="#eeeeee",u.fillRect(0,0,o,o),t.repaint(u),n.repaint(u),f=requestAnimationFrame(i)})}function p(){f&&cancelAnimationFrame(f),f=null}exports.start=h,exports.stop=p;
},{"./vector":38}],40:[function(require,module,exports) {

},{}],18:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-ai_run-0.d2181f95.png";
},{}],19:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-ai_run-1.e19f3fcc.png";
},{}],20:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-ai_thank-0.f615a19a.png";
},{}],21:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-ai_yay-0.d1dea71f.png";
},{}],22:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-ai_yay-1.358a9b0e.png";
},{}],23:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-boss-0.7a54406a.png";
},{}],24:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-boss-1.62b9a4f0.png";
},{}],25:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-boss_gj-0.ee05bdf0.png";
},{}],26:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-boss_gj-1.b4640e18.png";
},{}],33:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/bonus-bou-1.dea89848.png";
},{}],34:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/bonus-nasu-0.5696c395.png";
},{}],16:[function(require,module,exports) {
"use strict";var e=this&&this.__generator||function(e,t){var s,r,n,a,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(s)throw new TypeError("Generator is already executing.");for(;l;)try{if(s=1,r&&(n=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(n=n.call(r,a[1])).done)return n;switch(r=0,n&&(a=[0,n.value]),a[0]){case 0:case 1:n=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(n=(n=l.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){l.label=a[1];break}if(6===a[0]&&l.label<n[1]){l.label=n[1],n=a;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(a);break}n[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],r=0}finally{s=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},t=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],s=0;return t?t.call(e):{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),require("./assets");var r=s(require("./assets/sprites-ai_run-0.png")),n=s(require("./assets/sprites-ai_run-1.png")),a=s(require("./assets/sprites-ai_thank-0.png")),l=s(require("./assets/sprites-ai_yay-0.png")),i=s(require("./assets/sprites-ai_yay-1.png")),u=s(require("./assets/sprites-boss-0.png")),c=s(require("./assets/sprites-boss-1.png")),o=s(require("./assets/sprites-boss_gj-0.png")),p=s(require("./assets/sprites-boss_gj-1.png")),f=s(require("./assets/bonus-bou-1.png")),b=s(require("./assets/bonus-nasu-0.png")),d=document.getElementById("coffeebreak1-content");function y(t){return e(this,function(e){switch(e.label){case 0:return 0<t--?[4]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}function h(){var s,h,g,m,v,x,_,q,w,k,E;return e(this,function(e){switch(e.label){case 0:s=(d.clientWidth>>1)-8,h=d.clientHeight-40,g=document.createElement("img"),d.appendChild(g),g.style.visibility="hidden",m=document.createElement("img"),d.appendChild(m),v=document.createElement("img"),d.appendChild(v),k=s,e.label=1;case 1:return 0<=k?(x=k%14<7?1:0,m.style.left=s-20-k+"px",m.style.top=h+"px",v.style.left=s+20+k+"px",v.style.top=h+"px",m.src=x?n.default:r.default,v.src=x?c.default:u.default,[4]):[3,4];case 2:e.sent(),e.label=3;case 3:return k--,[3,1];case 4:return m.src=a.default,v.src=o.default,[5,t(y(15))];case 5:e.sent(),_=0,q=[f.default,b.default],e.label=6;case 6:if(!(_<q.length))return[3,13];w=q[_],g.src=w,g.style.visibility="visible",g.style.top=h+4+"px",k=16,e.label=7;case 7:return-16<=k?(g.style.left=s+k+"px",[5,t(y(2))]):[3,10];case 8:e.sent(),e.label=9;case 9:return k--,[3,7];case 10:return g.style.visibility="hidden",[5,t(y(15))];case 11:e.sent(),e.label=12;case 12:return _++,[3,6];case 13:v.src=p.default,e.label=14;case 14:return m.style.top=h+"px",m.src=i.default,[5,t(y(15))];case 15:e.sent(),m.src=l.default,E=1,e.label=16;case 16:return E<16?(m.style.top=h-E+"px",[4]):[3,19];case 17:e.sent(),e.label=18;case 18:return E++,[3,16];case 19:E=16,e.label=20;case 20:return 0<E?(m.style.top=h-E+"px",[4]):[3,23];case 21:e.sent(),e.label=22;case 22:return E--,[3,20];case 23:return[3,14];case 24:return[2]}})}var g=null;function m(){var e=h();g=requestAnimationFrame(function t(){e.next(),g=requestAnimationFrame(t)})}function v(){g&&cancelAnimationFrame(g);for(var e=d.childNodes,t=e.length-1;0<=t;t--)e[t].remove();g=null}exports.start=m,exports.stop=v;
},{"./assets":40,"./assets/sprites-ai_run-0.png":18,"./assets/sprites-ai_run-1.png":19,"./assets/sprites-ai_thank-0.png":20,"./assets/sprites-ai_yay-0.png":21,"./assets/sprites-ai_yay-1.png":22,"./assets/sprites-boss-0.png":23,"./assets/sprites-boss-1.png":24,"./assets/sprites-boss_gj-0.png":25,"./assets/sprites-boss_gj-1.png":26,"./assets/bonus-bou-1.png":33,"./assets/bonus-nasu-0.png":34}],27:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-attacker_bot-0.fc1594ef.png";
},{}],28:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-attacker_bot-1.8239f83d.png";
},{}],29:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-attacker_bot2-0.7283bc33.png";
},{}],30:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/sprites-attacker_bot2-1.089a03c0.png";
},{}],31:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/bonus-takoyaki-0.96f088ac.png";
},{}],32:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/bonus-takoyaki-1.f8cc488f.png";
},{}],35:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/bg_misc-dot.3c6dca1d.png";
},{}],36:[function(require,module,exports) {
module.exports="https://townewgokgok.github.io/examples-javascript-generator/bg_misc-sweat.3d6f57d4.png";
},{}],15:[function(require,module,exports) {
"use strict";var e=this&&this.__generator||function(e,t){var r,s,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,s&&(n=s[2&a[0]?"return":a[0]?"throw":"next"])&&!(n=n.call(s,a[1])).done)return n;switch(s=0,n&&(a=[0,n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,s=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],s=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},t=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),require("./assets");var s=r(require("./assets/sprites-attacker_bot-0.png")),n=r(require("./assets/sprites-attacker_bot-1.png")),a=r(require("./assets/sprites-attacker_bot2-0.png")),i=r(require("./assets/sprites-attacker_bot2-1.png")),l=r(require("./assets/sprites-ai_run-0.png")),u=r(require("./assets/sprites-ai_run-1.png")),c=r(require("./assets/sprites-boss-0.png")),o=r(require("./assets/sprites-boss-1.png")),p=r(require("./assets/bonus-takoyaki-0.png")),f=r(require("./assets/bonus-takoyaki-1.png")),h=r(require("./assets/bg_misc-dot.png")),b=r(require("./assets/bg_misc-sweat.png")),d=document.getElementById("coffeebreak2-content");function y(t){return e(this,function(e){switch(e.label){case 0:return 0<t--?[4]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}var x=function(){function e(e){this.el=document.createElement("img"),this.el.src=e,this.el.style.transformOrigin="0 0",this.px=0,this.py=0,this.ax=0,this.ay=0,this.sx=1,this.sy=1,this.updateTransform()}return Object.defineProperty(e.prototype,"visible",{set:function(e){this.el.style.visibility=e?"visible":"hidden"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x",{get:function(){return this.px},set:function(e){this.px=e,this.el.style.left=this.px+"px"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.py},set:function(e){this.py=e,this.el.style.top=this.py+"px"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"anchorX",{set:function(e){this.ax=e,this.updateTransform()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"anchorY",{set:function(e){this.ay=e,this.updateTransform()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaleX",{set:function(e){this.sx=e,this.updateTransform()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaleY",{set:function(e){this.sy=e,this.updateTransform()},enumerable:!0,configurable:!0}),e.prototype.updateTransform=function(){this.el.style.transform="scale("+this.sx+", "+this.sy+") translate("+100*-this.ax+"%, "+100*-this.ay+"%)"},e}();function m(){function r(r,s){var n,a,i,l;return void 0===s&&(s=0),e(this,function(e){switch(e.label){case 0:return[5,t(y(s))];case 1:e.sent(),n=new x(r[1]),d.appendChild(n.el),n.x=m,n.y=v,n.anchorX=1,n.scaleX=-1,a=0,e.label=2;case 2:if(X)return[3,8];i=0,e.label=3;case 3:return i<16?(n.x++,l=a%20<10?0:1,n.el.src=r[l],[4]):[3,6];case 4:e.sent(),a++,e.label=5;case 5:return i++,[3,3];case 6:return[5,t(y(16))];case 7:return e.sent(),[3,2];case 8:return k?[3,10]:[4];case 9:return e.sent(),[3,8];case 10:n.anchorX=0,n.scaleX=1,e.label=11;case 11:return-16<n.x?(n.x-=2,l=a%10<5?0:1,n.el.src=r[l],[4]):[3,13];case 12:return e.sent(),a++,[3,11];case 13:return[2]}})}var m,g,v,_,q,w,X,k,O,j,P,T,C,Y,S,A,E,F,M,W,B,D,G,H,I,N;return e(this,function(e){switch(e.label){case 0:m=-16,g=d.clientWidth,v=d.clientHeight-32,_=10,q=4,w=16,X=!1,k=!1,O=new x("sprites-ai_run-1.png"),d.appendChild(O.el),O.x=-16,O.y=v,j=r([s.default,n.default]),P=r([a.default,i.default],40),T=0,Y=[],O.anchorX=1,O.scaleX=-1,S=m,e.label=1;case 1:return S<=g?(A=(S-m)%20<10?1:0,O.x=S,O.el.src=A?o.default:c.default,0<=S&&S%w==0&&(E=new x(h.default),Y.push(E),d.appendChild(E.el),E.x=O.x,E.y=v+_,S===3*d.clientWidth>>2&&(C=E,E.el.src=p.default,E.x-=4,E.y=v+q)),C&&(F=T%4<2?0:1,C.el.src=F?f.default:p.default),[4]):[3,4];case 2:e.sent(),T++,e.label=3;case 3:return S+=2,[3,1];case 4:O.anchorX=0,O.scaleX=1,S=m,e.label=5;case 5:return S<=g?(A=(S-m)%20<10?1:0,O.x=S,O.el.src=A?u.default:l.default,(S+4)%w==0&&(E=Y.shift(),d.removeChild(E.el),E===C)?(C=null,[3,8]):(C&&(F=T%4<2?0:1,C.el.src=F?f.default:p.default,j.next(),P.next()),[4])):[3,8];case 6:e.sent(),T++,e.label=7;case 7:return S+=2,[3,5];case 8:M=0,e.label=9;case 9:return M<=8?(j.next(),P.next(),[4]):[3,12];case 10:e.sent(),e.label=11;case 11:return M++,[3,9];case 12:X=!0,O.anchorX=.5,O.anchorY=1,O.x+=8,O.y+=24,W=0,e.label=13;case 13:return W<=24?(B=W%4<1+(W>>3)?2:1,O.scaleX=B,O.scaleY=B,j.next(),P.next(),[4]):[3,16];case 14:e.sent(),e.label=15;case 15:return W++,[3,13];case 16:D=0,e.label=17;case 17:return D<=48?(j.next(),P.next(),24===D&&(O.scaleX=-2),[4]):[3,20];case 18:e.sent(),e.label=19;case 19:return D++,[3,17];case 20:k=!0,e.label=21;case 21:return G=j.next(),H=P.next(),[4];case 22:return e.sent(),G.done&&H.done?[3,23]:[3,21];case 23:return[5,t(y(15))];case 24:e.sent(),I=new x(b.default),d.appendChild(I.el),I.x=O.x+16,I.y=O.y-50,I.scaleX=-2,I.scaleY=2,N=0,e.label=25;case 25:return I.visible=N%20<10,[4];case 26:e.sent(),e.label=27;case 27:return N++,[3,25];case 28:return[2]}})}exports.default=m;var g=null;function v(){var e=m();g=requestAnimationFrame(function t(){e.next(),g=requestAnimationFrame(t)})}function _(){g&&cancelAnimationFrame(g);for(var e=d.childNodes,t=e.length-1;0<=t;t--)e[t].remove();g=null}exports.start=v,exports.stop=_;
},{"./assets":40,"./assets/sprites-attacker_bot-0.png":27,"./assets/sprites-attacker_bot-1.png":28,"./assets/sprites-attacker_bot2-0.png":29,"./assets/sprites-attacker_bot2-1.png":30,"./assets/sprites-ai_run-0.png":18,"./assets/sprites-ai_run-1.png":19,"./assets/sprites-boss-0.png":23,"./assets/sprites-boss-1.png":24,"./assets/bonus-takoyaki-0.png":31,"./assets/bonus-takoyaki-1.png":32,"./assets/bg_misc-dot.png":35,"./assets/bg_misc-sweat.png":36}],17:[function(require,module,exports) {
"use strict";var e=this&&this.__generator||function(e,t){var n,r,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(a=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[0,a.value]),o[0]){case 0:case 1:a=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(a=(a=u.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){u.label=o[1];break}if(6===o[0]&&u.label<a[1]){u.label=a[1],a=o;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(o);break}a[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},t=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=n(require("./vector")),a=2,o=300;function u(n){var r;return e(this,function(e){switch(e.label){case 0:return n.size()<=a?[4,n]:[3,2];case 1:return e.sent(),[2];case 2:return r=n.mul(1/3),[5,t(u(r))];case 3:return e.sent(),[5,t(u(r.rotate(-Math.PI/3)))];case 4:return e.sent(),[5,t(u(r.rotate(Math.PI/3)))];case 5:return e.sent(),[5,t(u(r))];case 6:return e.sent(),[2]}})}var l=null;function i(){var e=document.getElementById("recursion-info"),t=document.getElementById("recursion-canvas");t.width=o,t.height=o;var n=t.getContext("2d");n.fillStyle="#eeeeee",n.fillRect(0,0,o,o);var a=0;var i=new r.default(0,.8*o),s=u(new r.default(o,0));l=requestAnimationFrame(function t(){l=null;var r,o,u=s.next();u.value&&(r=i,o=i.add(u.value),n.beginPath(),n.strokeStyle="#000000",n.lineWidth=1,n.moveTo(r.x,r.y),n.lineTo(o.x,o.y),n.stroke(),e.textContent="frame: "+a+" / pos: ("+Math.round(o.x)+", "+Math.round(o.y)+")",a++,i=i.add(u.value)),u.done||(l=requestAnimationFrame(t))})}function s(){l&&cancelAnimationFrame(l),l=null}exports.start=i,exports.stop=s;
},{"./vector":38}],6:[function(require,module,exports) {
"use strict";var e=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)Object.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t.default=e,t},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});for(var s=e(require("./inn")),r=e(require("./guide")),a=e(require("./basic")),n=e(require("./concurrent")),i=e(require("./coffeebreak1")),u=e(require("./coffeebreak2")),o=e(require("./recursion")),l=t(require("./assets/sprites-ai_run-0.png")),d=t(require("./assets/sprites-ai_run-1.png")),c=t(require("./assets/sprites-ai_thank-0.png")),f=t(require("./assets/sprites-ai_yay-0.png")),p=t(require("./assets/sprites-ai_yay-1.png")),g=t(require("./assets/sprites-boss-0.png")),b=t(require("./assets/sprites-boss-1.png")),m=t(require("./assets/sprites-boss_gj-0.png")),q=t(require("./assets/sprites-boss_gj-1.png")),h=t(require("./assets/sprites-attacker_bot-0.png")),_=t(require("./assets/sprites-attacker_bot-1.png")),v=t(require("./assets/sprites-attacker_bot2-0.png")),k=t(require("./assets/sprites-attacker_bot2-1.png")),y=t(require("./assets/bonus-takoyaki-0.png")),w=t(require("./assets/bonus-takoyaki-1.png")),E=t(require("./assets/bonus-bou-1.png")),L=t(require("./assets/bonus-nasu-0.png")),B=t(require("./assets/bg_misc-dot.png")),C=t(require("./assets/bg_misc-sweat.png")),I=document.getElementById("preloader"),M=0,j=[l.default,d.default,c.default,f.default,p.default,g.default,b.default,m.default,q.default,h.default,_.default,v.default,k.default,y.default,w.default,E.default,L.default,B.default,C.default];M<j.length;M++){var x=j[M],O=document.createElement("img");O.src=x,I.appendChild(O)}var D={coffeebreak1:i,coffeebreak2:u,inn:s,guide:r,basic:a,concurrent:n,recursion:o},P=document.getElementById("buttons");P.innerHTML="";var H=null;for(var N in D){var S=document.createElement("button");S.textContent=N,P.appendChild(S),S.addEventListener("click",function(e,t){e.blur(),T(t)}.bind(null,S,N))}function T(e){(window.location.hash.length<2||window.location.hash.substr(1)!==e)&&(window.location.hash="#"+e);for(var t=D[e],s=document.getElementsByClassName("example"),r=0;r<s.length;r++)s[r].classList.remove("visible");document.getElementById("example-"+e).classList.add("visible"),H&&H.stop(),t.start(),H=t}function z(){if(2<=window.location.hash.length){var e=window.location.hash.substr(1);for(var t in D)if(e===t){T(e);break}}}window.addEventListener("hashchange",z),document.addEventListener("DOMContentLoaded",function(){document.getElementById("buttons").style.display="block",document.getElementById("loading").remove(),z()});
},{"./inn":11,"./guide":12,"./basic":13,"./concurrent":14,"./coffeebreak1":16,"./coffeebreak2":15,"./recursion":17,"./assets/sprites-ai_run-0.png":18,"./assets/sprites-ai_run-1.png":19,"./assets/sprites-ai_thank-0.png":20,"./assets/sprites-ai_yay-0.png":21,"./assets/sprites-ai_yay-1.png":22,"./assets/sprites-boss-0.png":23,"./assets/sprites-boss-1.png":24,"./assets/sprites-boss_gj-0.png":25,"./assets/sprites-boss_gj-1.png":26,"./assets/sprites-attacker_bot-0.png":27,"./assets/sprites-attacker_bot-1.png":28,"./assets/sprites-attacker_bot2-0.png":29,"./assets/sprites-attacker_bot2-1.png":30,"./assets/bonus-takoyaki-0.png":31,"./assets/bonus-takoyaki-1.png":32,"./assets/bonus-bou-1.png":33,"./assets/bonus-nasu-0.png":34,"./assets/bg_misc-dot.png":35,"./assets/bg_misc-sweat.png":36}]},{},[6], null)
//# sourceMappingURL=https://townewgokgok.github.io/examples-javascript-generator/src.39b3daf8.map