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

const score: Array<number> = [];
const name1: Array<string> = [];

function identityFirst(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree(6);

function identityFour<T>(val: T): T {
  return val;
}
identityFour("score");

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "g", type: 5 });

//! 03:47:41 - 03:55:50 - Generics in Array and Arrow functions in Typescript

function getSearchproducts<T>(products: T[]): T {
  // do some database opertaions
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchproducts = <T>(products: T[]): T => {
  const myIndex = 3;
  return products[myIndex];
};

//! 03:55:50 - 04:06:59 - Generic Classes in Typescript

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
anotherFunction(3, 6);
anotherFunction(3, "6");

function anotherFunctionTwo<T, U extends string>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
anotherFunctionTwo(6, "7");
// anotherFunctionTwo(6, 7);

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunctionThree<T, U extends Database>(valOne: T, valTwo: U) {
  return {
    valOne,
    valTwo,
  };
}
anotherFunctionThree(6, {
  connection: "",
  username: "",
  password: "string;",
});

//! Using Class Type in generics (<T>)

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

//! 04:06:59 - 04:16:47 - Type Narrowing in typescript

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

//! 04:16:47 - 04:22:00 - The in operator narrowing

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//! 04:22:00 - 04:31:18 - Instanceof and Type Predicates
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

//! Using type Predicates

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  } else {
    pet;
    return "bird food";
  }
}

//! 04:31:18 - 04:42:37 - Discriminated Union and Exhaustiveness Checking with never
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  length: number;
}

//^ Discriminated Union check
type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // return shape.side * shape.side;
}

//^ Exhaustiveness Checking with never

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side * shape.side;

    case "rectangle":
      return shape.width * shape.length;

    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

//! ///////////// Narrowing Done /////////////////////
//! ///////////// Typescript Done /////////////////////
