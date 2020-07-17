const isAnagram = require("./anagrams");

test("isAnagram function exist", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("cinema is an anagram of iceman", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("Dormitory is an anagram of dirty room##", () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

test("HELLO is NOT an anagram of Aloha", () => {
  expect(isAnagram("HELLO", "Aloha")).toBeFalsy();
});
