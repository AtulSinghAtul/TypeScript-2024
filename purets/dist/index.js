"use strict";
// console.log("Typescript is here still");
// console.log("Typescript is amazing");
//! Classes in Typescript
// class User {
//   email: string;
//   name: string;
//   readonly city: string = "Prayagraj";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const atul = new User("as@m.com", "atul");
// console.log(atul);
// atul.city = "Prayagraj";
// class User {
//   public email: string;
//   private name: string;
//   private readonly city: string = "Prayagraj";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const atul = new User("as@m.com", "atul");
// console.log(atul);
// console.log(atul.name);
// console.log(atul.email);
//* shortcut way for class in ts
// class User {
//   readonly city: string = "Prayagraj";
//   constructor(public email: string, public name: string) {}
// }
// const atul = new User("as@m.com", "atul");
// console.log(atul);
//* Getters and Setters in Typescript
// class User {
//   private _courseCount = 1;
//   readonly city: string = "Prayagraj";
//   constructor(public email: string, public name: string) {}
//   private deleteToken() {
//     console.log("Token deleted");
//   }
//   get getAppleEmail(): string {
//     return `apple ${this.email}`;
//   }
//   get courseCount(): number {
//     return this._courseCount;
//   }
//   set courseCount(courseNum) {
//     if (courseNum <= 1) {
//       throw new Error("Course count should be more than 1");
//     }
//     this._courseCount = courseNum;
//   }
// }
// const atul = new User("as@g.com", "atul");
//Property 'deleteToken' is private and only accessible within class 'User
// atul.deleteToken()
//! 03:15:08 - 03:19:17 - Protected in Typescript
//* exchange modifier
//^ 1:- public - accessible everywhere
//^ 2:- private - accessible only  inside class not outside of class User
// class User {
//   private _courseCount = 1;
//   readonly city: string = "Prayagraj";
//   constructor(public email: string, public name: string) {}
//   private deleteToken() {
//     console.log("Token deleted");
//   }
// }
// class SubUser extends User {
//   isFamily: boolean = true;
//   changeCourseCount() {
//     this._courseCount = 4;
//   }
// }
// const atul = new User("as@g.com", "atul");
// console.log(atul);
//^ 3:- protected - accessible inside class and also inherited class not outside of class
// class User {
//   protected _courseCount = 1;
//   readonly city: string = "Prayagraj";
//   constructor(public email: string, public name: string) {}
//   private deleteToken() {
//     console.log("Token deleted");
//   }
// }
// class SubUser extends User {
//   isFamily: boolean = true;
//   changeCourseCount() {
//     this._courseCount = 4;
//   }
// }
// const atul = new User("as@g.com", "atul");
// console.log(atul);
//! 03:19:17 - 03:25:48 - Why Interface is important in typescript
// interface TakePhoto {
//   cameraMode: string;
//   filter: string;
//   burst: number;
// }
// interface Story {
//   createStory(): void;
// }
// class Instagram implements TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number
//   ) {}
// }
// class Youtube implements TakePhoto, Story {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number,
//     public short: string
//   ) {}
//   createStory(): void {
//     console.log("Story was created");
//   }
// }
//! 03:25:48 - 03:35:19 - Abstract class in Typescript
// abstract class TakePhoto {
//   constructor(public cameraMode: string, public filter: string) {}
//   abstract getSepia(): void;
//   getReelTime(): number {
//     //some complex calculation
//     return 8;
//   }
// }
// class Instagram extends TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number
//   ) {
//     super(cameraMode, filter);
//   }
//   getSepia(): void {
//     console.log("Sepia");
//   }
// }
// const atul = new Instagram("test", "test", 3);
// atul.getReelTime();
//! 03:35:19 - 03:47:41 - Generics in Typescript
const score = [];
const name1 = [];
function identityFirst(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(6);
function identityFour(val) {
    return val;
}
identityFour("score");
