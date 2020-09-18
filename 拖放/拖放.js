/*
 * @Author: your name
 * @Date: 2020-09-18 18:30:46
 * @LastEditTime: 2020-09-18 20:35:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客\3.排序算法\拖放\拖放.js
 */
var DragDrop = (function () {
  var dragging = null,
    diffX = 0,
    diffY = 0;
  function handleEvent(event) {
    event = event || window.event;
    var target = event.target || event.srcElement;
    switch (event.type) {
      case "mousedown":
        if (target.className.indexOf("draggable") > -1) {
          dragging = target;
          diffX = event.clientX - target.offsetLeft;
          diffY = event.clientY - target.offsetTop;
        }
        break;
      case "mousemove":
        if (dragging !== null) {
          dragging.style.left = event.clientX - diffX + "px";
          dragging.style.top = event.clientY - diffY + "px";
        }
        break;
      case "mouseup":
        dragging = null;
        break;
    }
  }
  return {
    enable: function () {
      document.documentElement.addEventListener("mousedown", handleEvent);
      document.documentElement.addEventListener("mousemove", handleEvent);
      document.documentElement.addEventListener("mouseup", handleEvent);
    },
    disable: function () {
      document.documentElement.removeEventListener("mousedown", handleEvent);
      document.documentElement.removeEventListener("mousemove", handleEvent);
      document.documentElement.removeEventListener("mouseup", handleEvent);
    },
  };
})();
DragDrop.enable();
// DragDrop.disable();
