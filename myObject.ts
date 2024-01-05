//! Bad behaviour of objects in typescript

// let myObj = {
//   name: "Atul",
//   email: "a@a.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "atul", isPaid: false, email: "a@A.com" };

// createUser(newUser);

// function createCourse(): { name: string; isPaid: boolean; email: string } {
//   return { name: "atul", isPaid: false, email: "a@A.com" };
// }

//! Type Aliases in Typescript

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// type ID = number | string;

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

//!  READONLY and optional in typescript

// type User = {
//   readonly _id: string;
//   name: string;
//   email: string;
//   isActive: boolean;
//   credcardDetails?: number;
// };

// let myUser: User = {
//   _id: "12345",
//   name: "at",
//   email: "at@t.com",
//   isActive: true,
// };

// myUser.name = "Atul";
// myUser._id = "9876";

// type cardNumber = {
//   cardNumber: string;
// };

// type cardDate = {
//   cardNumber: number;
// };

// type cardDetailes = cardNumber &
//   cardDate & {
//     cvv: number;
//   };

//! 01:41:56 - 01:49:46 - Array in Typescript

const myHero = [];
const myHeros: string[] = [];
// const myPower: number[] = [];
//* another way definig the same thing
const myPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

const allUser: User[] = [];

const mlModels: number[][] = [[1, 2, 3, 4], []];

allUser.push({ name: "atul singh", isActive: true });
myHero.push("thor");
myHeros.push("rom", "thor");
myPower.push(2);

export {};
