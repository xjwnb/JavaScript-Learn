/*
 * @Author: your name
 * @Date: 2020-09-20 12:03:31
 * @LastEditTime: 2020-09-20 14:21:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客\3.排序算法\canvas\canvas.js
 */

window.onload = function () {
  /** @type {HTMLCanvasElement} */
  var drawing = document.getElementById("drawing");
  if (drawing.getContext) {
    var context = drawing.getContext("2d");
    console.log(context);

    // toDataURL 可以导出 canvas 上绘制的图像
    var imgURI = drawing.toDataURL("image/png");
    console.log(imgURI);

    // context.strokeStyle = "red";
    context.fillStyle = "#0000ff";
    context.fillRect(10, 10, 100, 50);

    context.fillStyle = "rgba(0, 255, 0, 0.5)";
    context.fillRect(50, 30, 100, 50);

    context.strokeStyle = "#135626";
    context.strokeRect(100, 100, 100, 50);

    context.strokeStyle = "rgba(0, 255, 0, 0.5)";
    context.strokeRect(70, 70, 100, 50);

    // 清除一个矩形
    // context.clearRect(50, 60, 100, 50);

    // 绘制路径
    context.beginPath();
    context.arc(100, 100, 50, 0, 2 * Math.PI, false);
    context.arcTo(20, 30, 30, 50, 20);

    //
    context.stroke();
  }
};
