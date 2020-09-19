/*
 * @Author: your name
 * @Date: 2020-09-19 12:47:48
 * @LastEditTime: 2020-09-19 13:33:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客\3.排序算法\Cookie\SubCookieUtil.js
 */
var SubCookieUtil = {
  // 获得 cookie 中的 name 中的子cookie name 的值
  get: function (name, subName) {
    var subCookies = this.getAll(name);
    if (subCookies) {
      return subCookies[subName];
    } else {
      return null;
    }
  },
  // 获得 cookie 中的 name 的值
  getAll: function (name) {
    var cookieName = encodeURIComponent(name) + "=",
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null,
      cookieEnd,
      subCookies,
      i,
      parts,
      result = {};
    if (cookieStart > -1) {
      cookieEnd = document.cookie.indexOf(";", cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = document.cookie.substring(
        cookieStart + cookieName.length,
        cookieEnd
      );
      if (cookieValue.length > 0) {
        subCookies = cookieValue.split("&");
        for (i = 0, len = subCookies.length; i < len; i++) {
          parts = subCookies[i].split("=");
          result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
        }
        return result;
      }
    }
    return null;
  },
  // 设置 cookie
  setAll: function (name, subcookies, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + "=",
      subcookieParts = new Array(),
      subName;
    for (subName in subcookies) {
      if (subName.length > 0 && subcookies.hasOwnProperty(subName)) {
        subcookieParts.push(
          encodeURIComponent(subName) +
            "=" +
            encodeURIComponent(subcookies[subName])
        );
      }
    }
    if (subcookieParts.length > 0) {
      cookieText += subcookieParts.join("&");
      if (expires instanceof Date) {
        cookieText += "; expires=" + expires.toGMTString();
      }
      if (path) {
        cookieText += "; path=" + path;
      }
      if (domain) {
        cookieText += "; domain=" + domain;
      }
      if (secure) {
        cookieText += "; secure";
      }
    } else {
      cookieText += '""; expires=' + new Date(0).toGMTString();
    }
    document.cookie = cookieText;
  },
  //
  set: function (name, subName, value, expires, path, domain, secure) {
    var subcookies = this.getAll(name) || {};
    subcookies[subName] = value;
    this.setAll(name, subcookies, expires, path, domain, secure);
  },
};
