/*
 * @Author: your name
 * @Date: 2020-09-17 20:03:33
 * @LastEditTime: 2020-09-17 20:07:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客\3.排序算法\跨浏览器的CORS.js
 */
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}