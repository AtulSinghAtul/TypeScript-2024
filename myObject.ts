let myObj = {
  name: "Atul",
  email: "a@a.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "atul", isPaid: false, email: "a@A.com" };

createUser(newUser);

function createCourse(): { name: string; isPaid: boolean; email: string } {
  return { name: "atul", isPaid: false, email: "a@A.com" };
}
