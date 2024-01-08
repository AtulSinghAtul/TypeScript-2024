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
//^ 2:- private - accessible only  inside class not outside of class
//^ 3:- protected - accessible inside class and also inherited class not outside of class

class User {
  protected _courseCount = 1;
  readonly city: string = "Prayagraj";
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("Token deleted");
  }
}

const atul = new User("as@g.com", "atul");
