//! 02:14:16 - 02:23:46 - Enums in typescript

// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// if (seat == AISLE) {
// }

/* 
Enums (short for enumerations) in TypeScript are a way to define a set of named constant values, representing a finite set of distinct values or categories. Enums make your code more readable and maintainable by giving meaningful names to these values.

Enums in TypeScript provide a way to define a set of related named constants, making the code more expressive and reducing the chances of using invalid values. They are especially useful when working with a predefined set of options or when you want to create a more readable codebase.
*/
`// Enum declaration
enum Days {
  Sunday = "रविवार",
  Monday = "सोमवार",
  Tuesday = "मंगलवार",
  Wednesday = "बुधवार",
  Thursday = "गुरुवार",
  Friday = "शुक्रवार",
  Saturday = "शनिवार",
}

// Using the enum
let today: Days = Days.Wednesday;
console.log("आज " + today + " है।");
`;

enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
  FOURTH,
}
const hcSeat = SeatChoice.AISLE;

enum SeatChoice1 {
  AISLE = 22,
  MIDDLE = 45,
  WINDOW,
  FOURTH,
}
const hcSeat1 = SeatChoice1.AISLE;

enum SeatChoice2 {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "window",
  FOURTH = "fourth",
}
const hcSeat2 = SeatChoice2.AISLE;

enum SeatChoice3 {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = 7,
  FOURTH,
}
const hcSeat3 = SeatChoice3.AISLE;

const enum SeatChoice4 {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = 7,
  FOURTH,
}
const hcSeat4 = SeatChoice4.AISLE;
