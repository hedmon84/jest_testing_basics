const chunkArray = require("./chunk");

//check if func exist
test("chunkArray Function exists", () => {
  expect(chunkArray).toBeDefined();
});

test("Chunk an array of 10 values with lenght of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test("Chunk an array of 3 values with lenght of 1", () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1], [2], [3]]);
});
