/*
 * @Author: your name
 * @Date: 2020-09-08 10:57:22
 * @LastEditTime: 2020-09-12 22:26:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客\3.排序算法\输出.js
 */
(function () {
  console.log(typeof foo);
  console.log(typeof bar);
  var foo = "hello",
    bar = function () {
      return "world";
    };
  function foo() {
    return "hello";
  }
})();
// 输出 funtion undefined

var i = 10;
i--;
console.log(i);
--i;
console.log(i);

console.log(i++);
console.log(++i);

function factorial(num) {
  var pro = 1;
  for (var i = num; i >= 1; --i) {
    pro *= i;
  }
  return pro;
}
console.log(factorial(10));

console.log("--------------------------------------");
// arguments.callee
function fn1(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}
console.log(fn1(10));

console.log("----------------------------------------");
// arguments.callee.caller
function outer() {
  inner();
}
function inner() {
  console.log(arguments);
  console.log(arguments.callee.caller);
  console.log(inner.caller);
}
outer();
