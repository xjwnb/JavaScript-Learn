/*
 * @Author: your name
 * @Date: 2020-09-18 20:58:32
 * @LastEditTime: 2020-09-18 21:23:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客\3.排序算法\this.js
 */
var name = "window: 小卡车";
var age = 18;
var message = {
  name: "message: 小卡车",
  age: 20,
  toString: function () {
    return `name: ${this.name}, age: ${this.age}`;
  },
  getMsg: function () {
    var msg = {
      name: this.name,
      age: this.age,
    };
    console.log(msg);
    return {
      name: this.name,
      age: this.age,
    };
  },
  getMsg1: function () {
    return function () {
      console.log(this);
      return {
        name: this.name,
        age: this.age,
      };
    };
  },
};
console.log(message.toString()); // name: message: 小卡车, age: 20
var msgObj = message.getMsg(); // {name: "message: 小卡车", age: 20}
console.log(msgObj); // {name: "message: 小卡车", age: 20}

console.log(message.getMsg1()()); // window  {name: "window: 小卡车", age: 18}
console.log(this); // window
