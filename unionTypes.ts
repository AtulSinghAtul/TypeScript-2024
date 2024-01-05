//! 01:49:46 - 02:04:29 - Union Types in TS

//* union use case in array
let myName: string | number | boolean = "atul";

let data: number[] = [1, 2, 3];
let data2: string[] = ["1", "2", "3"];
// let data3: number[] | string[] = ["1", 2, 3];
let data3: (number | string | boolean)[] = ["1", 2, 3, true];

//* union use case in object

type User = {
  name: string;
  id: number;
};

type Admin = {
  adminName: string;
  id: number;
};

let userDetail: User | Admin = {
  name: "atul",
  id: 1,
};

userDetail = {
  adminName: "atul singh",
  id: 1,
};

//* union type use case in function

function getDbData(id: number | string) {
  // id.toLowerCase();
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//* union use case for strict checking

let pi: 3.14 = 3.14;
// pi = 3.45;

let seatAlloted: "Aisle" | "Middle" | "Window";
seatAlloted = "Middle";
// seatAlloted = "crew";

getDbData(3);
getDbData("3");

myName = 43;
myName = true;
