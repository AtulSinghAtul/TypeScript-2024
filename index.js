"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hi I am Atul");
var num = 5;
num = 55;
console.log(num);
// TODO 1: Write a program to add two numbers?
// TODO 2: How to catch error & solve it?
// TODO 3: TS configuration file
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 15));
// console.log(sum(5, "15"));

//^ Must Define Type In Function
function addTwo(num) {
  // num.toUpperCase();
  return num * 2;
}
function getUpper(val) {
  return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {}

//* Giving Default Value
var loginUser = function (name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
};

//

getUpper("atul");
addTwo(5);
signUpUser("atul", "atul123@gmail.com", true);
loginUser("atul", "atul123@gmail.com");
