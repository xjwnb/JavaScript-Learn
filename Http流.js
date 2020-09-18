/*
 * @Author: your name
 * @Date: 2020-09-17 20:22:38
 * @LastEditTime: 2020-09-17 20:27:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客\3.排序算法\Http流.js
 */


function createStreamingClient(url, progress, finished) {
  var xhr = new XMLHttpRequest(),
      received = 0;
  xhr.open("get", url, true);
  xhr.onreadystatechange = function() {
    var result;
    if (xhr.readyState == 3) {
      result = xhr.responseText.substring(0);
      received += result.length;

      // 回调函数
      progress(result);
    } else if (xhr.readyState == 4) {
      finished(xhr.responseText);
    }
  };
  xhr.send(null);
  return xhr;
}