/*
 * @Author: your name
 * @Date: 2020-09-17 19:39:51
 * @LastEditTime: 2020-09-17 19:44:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客\3.排序算法\JSONP.js
 */
window.onload = function () {
  function handleResponse(responnse) {
    console.log(responnse);
  }
  var script = document.createElement("script");
  script.src = "http://freegeoip.net/json/?callback=handleResponse";
  document.body.insertBefore(script, document.body.firstChild);
};
