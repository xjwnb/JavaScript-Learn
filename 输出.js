/*
 * @Author: your name
 * @Date: 2020-09-08 10:57:22
 * @LastEditTime: 2020-09-14 18:38:01
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

// arguments
function f() {
  console.log(arguments);
  console.log(typeof arguments);
  for (var key in arguments) {
    console.log(arguments[key]);
  }
}
f(1, 2, 3);

// bind
function a() {
  console.log("a");
}
var obj = new Object();
console.log(obj);

console.log("----------------------");
// defineProperty
// var msg = {
//   name: "xkc",
//   age: 20,
// };
// Object.defineProperty(msg, "name", {
// /*   configurable: true,
//   enumerable: true, */
//   get: function () {
//     return "666";
//   },
//   set: function (newValue) {
//     if (newValue) {
//       this.name = "XKC";
//     }
//   },
// });
// msg.name = 12;
// console.log(msg.name);
var book = {
  _year: 2004,
  edit: 1,
};
Object.defineProperty(book, "year", {
  get: function () {
    return this._year || 2;
  },
  set: function (newValue) {
    if (newValue > 2004) {
      this._year = newValue;
      this.edit += newValue - 2004;
    }
  },
});
book.year = 2005;
console.log(book.year);

// class
console.log("-------------------------------");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  write(i) {
    console.log(i);
  }

  say() {
    console.log(`Hello World ${this.name}`);
  }
  static hai() {
    console.log(`hai`);
  }
}
var person = new Person("小卡车", 20);
Person.hai();
person.say();
class XKC extends Person {
  constructor(name, age, habby) {
    super(name, age);
    this.habby = habby;
  }
  write() {
    console.log(arguments);
  }

  say() {
    console.log(`${this.name}，今年${this.age}岁，${super.name} 在说话`);
  }
}
var xkc = new XKC("飞天小卡车", 20, "打LOL");
xkc.say();
xkc.write(1);
xkc.write(1, 2);

// 原型继承
console.log("---------------------------");
var person1 = {
  name: "小卡车",
  age: 20,
  habby: ["打LOL", "听歌"],
};
var personTest1 = Object.create(person1);
console.log(personTest1.name);
personTest1.name = "xkc";
console.log(personTest1.name);
personTest1.habby.push("唱歌");
console.log(personTest1.habby);
var personTest2 = Object.create(person1);
console.log(personTest2.name);
console.log(personTest2.habby);

// 构造函数继承
console.log("----------------------------");
function SuperType1(name, age) {
  this.name = name;
  this.age = age;
}
function SubType1(name, age, habby) {
  SuperType1.call(this, name, age);
  this.habby = habby;
}
var sub1 = new SubType1("小卡车", 20, ["打LOL"]);
console.log(sub1.name);
console.log(sub1.age);
sub1.habby.push("听歌");
console.log(sub1.habby);
var sub = new SubType1("xkc", 20, ["打LOL"]);
console.log(sub.habby);

// 原型链继承
console.log("--------------------------------");
function SuperType2(name, age) {
  this.name = name;
  this.age = age;
}
function SubType2(habby) {
  this.habby = habby;
}
SubType2.prototype = new SuperType2("小卡车", 20);
var sub2 = new SubType2(["LOL"]);
console.log(sub2.name);
console.log(sub2.age);
sub2.habby.push("率土之滨");
console.log(sub2.habby);
var sub3 = new SubType2(["lol"]);
console.log(sub3.habby);

// 组合继承
console.log("-----------------------------------");
function SuperType3(name, age) {
  this.name = name;
  this.age = age;
}
function SubType3(name, age, habby) {
  SuperType3.call(this, name, age);
  this.habby = habby;
}
SubType3.prototype = new SuperType3();
SubType3.prototype.msg = function () {
  console.log(this.name, this.age, this.habby);
};
var sub4 = new SubType3("xkc", 20, ["LOL"]);
console.log(sub4.name);
console.log(sub4.age);
sub4.msg();
