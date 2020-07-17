const reverseString = require("./reversestring");

//check if func exist
test("reverseString Function exists", () => {
  expect(reverseString).toBeDefined();
});

test("String Reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String Reverses to uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
