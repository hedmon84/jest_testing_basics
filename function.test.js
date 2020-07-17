const functions = require("./function");
//Test function

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());
// const initDatabase = () => console.log("Data base Initialized..");

// const closeDatabase = () => console.log("Data base Closed..");

const nameCheck = () => console.log("checking name");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is jeff", () => {
    const user = "jeff";
    expect(user).toBe("jeff");
  });

  test("User is karen", () => {
    const user = "karen";
    expect(user).toBe("karen");
  });
});
//toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

//not
test("Adds 2 + 2 to  Not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

//toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test("Should  be falsy", () => {
  expect(functions.CheckValue(undefined)).toBeFalsy();
});

//toEqual for objects
test("Should  be brad Traversy object", () => {
  expect(functions.CreateUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

//Less than and Greater,less or equal or lessthanorequal

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;

  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/i/);
});

//Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//Working with async data

//Promise
// test("user fetched name should be Leanne Graham", () => {
//   expect.assertions(1); // assertions call
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

//Async Await sintax
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1); // assertions call
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
