interface InterfaceUser {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

//! 02:33:35 - 02:38:51 - Interface vs Type in typescript

//* reopen interface example
interface InterfaceUser {
  githubToken: string;
}

//* interface inheritance
interface Admin1 extends InterfaceUser {
  role: "Admin" | "ta" | "learner";
}

const atuls: Admin1 = {
  role: "Admin",
  githubToken: "github",
  dbId: 44,
  email: "atul@gmail.com",
  userId: 777,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "atul", off: 10) => {
    return 10;
  },
};
