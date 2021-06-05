import { oscillation } from "../src/oscillation";

test("oscillation(): a positive oscillated value", () => {
  expect(oscillation(0.1)(1, 1.5)).toStrictEqual({
    oscillation: true,
    negative: false,
  });
});

test("oscillation(): a positive oscillated value", () => {
  expect(oscillation(0.01)(0.5, 0.51)).toStrictEqual({
    oscillation: true,
    negative: false,
  });
});

test("oscillation(): a negative oscillated value", () => {
  expect(oscillation(0.1)(0.5, 0.3)).toStrictEqual({
    oscillation: true,
    negative: true,
  });
});
test("oscillation(): a non oscillated value", () => {
  expect(oscillation(0.1)(0.5, 0.5)).toStrictEqual({
    oscillation: false,
    negative: false,
  });
});
