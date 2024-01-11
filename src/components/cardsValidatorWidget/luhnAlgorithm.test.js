import isValidLuhn from "./luhnAlgorithm";
import { expect, test } from "@jest/globals";

test("correct number", () => {
  expect(isValidLuhn("27209998259101126")).toBeTruthy();
});

test("correct other number", () => {
  expect(isValidLuhn("5213 2438 5146 7504")).toBeTruthy();
});

test("correct 2other number", () => {
  expect(isValidLuhn("5315 3301 6282 8503")).toBeTruthy();
});

test("int argument", () => {
  expect(isValidLuhn(5315330162828503)).toBeFalsy();
});

test("uncorrect number", () => {
  expect(isValidLuhn("27209998G259101126")).toBeFalsy();
});

test("correct JCB number", () => {
  expect(isValidLuhn("3530111333300000")).toBeTruthy();
});
