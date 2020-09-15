/*
 * @Author: your name
 * @Date: 2020-09-15 13:20:37
 * @LastEditTime: 2020-09-15 14:46:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客\3.排序算法\Bom.js
 */

window.onload = function () {
  // 窗口位置
  var leftPos =
    typeof window.screenLeft === "number" ? window.screenLeft : window.screenX;
  var topPos =
    typeof window.screenTop === "number" ? window.screenTop : window.screenY;
  console.log("窗口距离屏幕的左边", leftPos);
  console.log("窗口距离屏幕的上边边", topPos);
  window.moveTo(0, 0);
  window.moveBy(100, 100);

  // 窗口大小
  function getPageSize() {
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;
    if (typeof pageWidth != "number") {
      if (document.compatMode == "CSS1Compat") {
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
      } else {
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
      }
    }
    return {
      pageWidth,
      pageHeight,
    };
  }
  var pageSize = getPageSize();
  var pageWidth = pageSize.pageWidth;
  var pageHeight = pageSize.pageHeight;
  console.log("窗口的宽度", pageWidth);
  console.log("窗口的高度", pageHeight);

  // 导航和打开窗口
  var baidu = window.open("https://www.baidu.com", "xkc", "height=600, width=600, top=10,left=10");
  setTimeout(() => {
    baidu.close();
    console.log(baidu.closed);
    console.log(baidu.opener);
  }, 3000);

  // 
  if (confirm("Are you OK?")) {
    console.log('OK');
  } else {
    console.log('No');
  }

  var result = prompt("Are you OK?", "");
  console.log(result);
};
