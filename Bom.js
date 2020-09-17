/*
 * @Author: your name
 * @Date: 2020-09-15 13:20:37
 * @LastEditTime: 2020-09-17 19:39:25
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
  var baidu = window.open(
    "https://www.baidu.com",
    "xkc",
    "height=600, width=600, top=10,left=10"
  );
  setTimeout(() => {
    baidu.close();
    console.log(baidu.closed);
    console.log(baidu.opener);
  }, 3000);

  //
  if (confirm("Are you OK?")) {
    console.log("OK");
  } else {
    console.log("No");
  }

  var result = prompt("Are you OK?", "");
  console.log(result);

  // location
  console.log(window.location === document.location); // true
  console.log(window.location);

  // 验证属性是否存在
  function isHostMethod(object, property) {
    var t = typeof object[property];
    return (
      t == "function" || !!(t == "object" && object[property]) || t == "unknown"
    );
  }
  console.log(isHostMethod(document, "open"));
  console.log(isHostMethod(history, "go"));
  console.log(isHostMethod(window, "location"));
  console.log(typeof window.location);

  var hasDontEnumQuirk = (function () {
    var o = {
      toString: function () {},
    };
    for (var key in o) {
      if (key === "toString") {
        console.log("111");
        return false;
      }
    }
    console.log("222");
    return true;
  })();

  // 
  console.log(navigator);

  // 
  var o1 = {
    ver: 0,
    webkit: 0
  }
  var userAgent = navigator.userAgent;
  if (/AppleWebKit\/(\S+)/.test(userAgent)) {
    console.log('嘿嘿嘿');
    o1.ver = RegExp["$1"];
    o1.webkit = parseFloat(o1.ver);
    console.log(o1);
  }

  var xkcDiv = document.getElementsByClassName('xkc')[0];
  console.log(xkcDiv)
  console.log('nodeType', xkcDiv.nodeType)
  console.log('nodeValue', xkcDiv.nodeValue)
  console.log('nodeName', xkcDiv.nodeName);
  var xkcDiv1 = document.getElementsByClassName('xkcOne')[0];
  console.log(xkcDiv1)
  console.log('nodeType', xkcDiv1.nodeType)
  console.log('nodeValue', xkcDiv1.nodeValue)
  console.log('nodeName', xkcDiv1.nodeName);
  var aDiv = document.getElementById('a');
  console.log(aDiv)
  console.log('nodeType', aDiv.nodeType)
  console.log('nodeValue', aDiv.nodeValue)
  console.log('nodeName', aDiv.nodeName);

  var xk = document.getElementsByClassName('xkc')[0].childNodes[1];
  console.log(xk)
  console.log(xkcDiv.ownerDocument);
  console.log(xkcDiv.hasChildNodes());

  // document
  console.log('document.URL', document.URL);
  console.log('document.referrer', document.referrer)
  console.log('document.domain', document.domain);

  // attribute
  console.log(document.getElementsByClassName("xkc")[0].attributes.getNamedItem("name").nodeValue);

  var p = document.createElement('p');
  p.innerText = "小卡车";
  document.body.appendChild(p);
  console.log(document.body);
  var textNode = document.createTextNode("Hello world");
  var ele = document.createElement("div");
  ele.appendChild(textNode);
  document.body.appendChild(ele);
  textNode.appendData("!");
  textNode.insertData(5, 'xkc');
  console.log(xkcDiv.firstElementChild)

  xkcDiv.classList.add('x1');

  console.log('document.readyState', document.readyState);
  console.log('document.charset',document.charset)

  // replaceChild
  var replaceDiv1 = document.createElement('div');
  replaceDiv1.appendChild(document.createTextNode("replace"));
  aDiv.parentNode.replaceChild(replaceDiv1, aDiv);

  console.log(xkcDiv.children);
  console.log(xkcDiv.childNodes)

  function Test1() {
    with(document) {
      console.log(document);
      console.log(location);
      console.log(body);
    }
  }
  Test1();
};
