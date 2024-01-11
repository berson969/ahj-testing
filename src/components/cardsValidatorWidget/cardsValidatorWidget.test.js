import cardsValidatorWidget from "./cardsValidatorWidget";
import { test, expect } from "@jest/globals";
import { JSDOM } from "jsdom";

const { document } = new JSDOM().window;

test("check-amex", () => {
  const element = document.createElement("div");
  const validator = new cardsValidatorWidget(element);
  expect(validator.checkTypeCard("371449635398431")).toBe("amex");
});

test("check-diners_club", () => {
  const element = document.createElement("div");
  const validator = new cardsValidatorWidget(element);
  expect(validator.checkTypeCard("30569309025904")).toBe("diners_club");
});

test("check-mir", () => {
  const element = document.createElement("div");
  const validator = new cardsValidatorWidget(element);
  expect(validator.checkTypeCard("2204001234404589")).toBe("mir");
});

test("check-not-mir", () => {
  const element = document.createElement("div");
  const validator = new cardsValidatorWidget(element);
  expect(validator.checkTypeCard("2304001234404589")).toBe(null);
});
