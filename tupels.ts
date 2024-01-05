//! 02:04:29 - 02:14:16 - Tuples in typescript

const user: (number | string)[] = ["hh", 1];

//* Tuples:- In tuples order and no of element is important

let tUser: [string, number, boolean];
tUser = ["as", 1, true];
// tUser = [true, "as", 1];
// tUser = ["as", 1, true, 2];

let rgb: [number, number, number] = [255, 123, 112];

type User1 = [number, string];
const newUser: User1 = [111, "ardf@h.com"];
newUser[0] = 222;
newUser[1] = "222";
newUser.push(8);
// newUser.push(true);

export {};
