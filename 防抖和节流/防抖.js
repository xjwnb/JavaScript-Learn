/*
 * @Author: your name
 * @Date: 2020-09-18 16:47:48
 * @LastEditTime: 2020-09-18 16:55:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客\3.排序算法\防抖和节流\防抖.js
 */
function throttle(fn, wait) {
  let previous = 0;
  return function() {
    let now = Date.now();
    let context = this;
    let args = arguments;
    if (now - previous > wait) {
      fn.apply(context, args);
      previous = now;
    }
  }
}
function test1() {
  console.log(1);
}
window.onload = function () {
  var debounceDiv = document.getElementById("throttle");
  function getMouceP(event) {
    console.log(event);
    console.log(event.screenX, event.screenY);
  }
  var debou = throttle(getMouceP, 1000);
  debounceDiv.addEventListener("mousemove", debou);
};
