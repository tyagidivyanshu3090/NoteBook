// src/components/_ _tests_ _/Sum.test.js
// Importing the Sum file
import { Sum } from "../../mockTestFile/Sum";

test("Sum function testing", () => {
  const result = Sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
