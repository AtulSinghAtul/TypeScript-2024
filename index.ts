console.log("Hi I am Atul");
let num: number = 5;
num = 55;
console.log(num);

// TODO 1: Write a program to add two numbers?
// TODO 2: How to catch error & solve it?
// TODO 3: TS configuration file

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(5, 15));
// console.log(sum(5, "15"));

//^ Must Define Type In Function

function addTwo(num: number) {
  // num.toUpperCase();
  return num * 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

//^ Giving Default Value
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

//^ 1- Mandatory set return value type in function

function addNum(num: number) {
  // return num + 2;
  return "hello";
}

function adNum(num: number): number {
  return num + 2;
  // return "hello";
}

//^ 2- in below case don't need to set function return value type

function getValue(value: number) {
  if (value > 5) {
    return true;
  }
  return "200 OK";
}

//^ arrow function
function getHello(s: string): string {
  return "";
}

//^ ////////////////////////////////////

const heros = ["thor", "spiderman", "ironman"];
// const heros = [8, 9, 5];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

//^ not returning anything void
function consoleErrMsg(errmsg: string): void {
  console.log(errmsg);
}

//^ using never
function handleErrMsg(errmsg: string): never {
  throw new Error(errmsg);
}

getUpper("atul");
addTwo(5);
signUpUser("atul", "atul123@gmail.com", true);
loginUser("atul", "atul123@gmail.com");
addNum(5);
adNum(6);
getValue(7);
getHello("");

export {};
