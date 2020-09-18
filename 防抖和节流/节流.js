/*
 * @Author: your name
 * @Date: 2020-09-18 15:38:02
 * @LastEditTime: 2020-09-18 16:41:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客\3.排序算法\节流.js
 */
function debounce(fun, wait) {
  let timeout;
  let a = 0;
  return function () {
    let context = this;
    let args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fun.apply(context, args);
    }, wait);
  };
}
function test1() {
  console.log(1);
}
window.onload = function () {
  var debounceDiv = document.getElementById("debouce");
  function getMouceP(event) {
    console.log(event);
    console.log(event.screenX, event.screenY);
  }
  var debou = debounce(getMouceP, 1000);
  debounceDiv.addEventListener("mousemove", debou);
};
