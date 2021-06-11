import { Log } from "../src/log";
import makeConsoleMock from "consolemock";
console = makeConsoleMock(console);

beforeEach(() => {
  console.clearHistory();
});
test("Log: test positive log", () => {
  Log({
    pair: "USD-SEK",
    initial: 0,
    current: 5,
    processed: { oscillation: true, negative: false },
  });
  expect(console.history()).toStrictEqual([
    { LOG: ["USD-SEK went up from 0 to 5"] },
  ]);
});
test("Log test negative log", () => {
  Log({
    pair: "USD-SEK",
    initial: 0,
    current: -1,
    processed: { oscillation: true, negative: true },
  });
  expect(console.history()).toStrictEqual([
    { LOG: ["USD-SEK went down from 0 to -1"] },
  ]);
});
test("Log test non oscillation", () => {
  Log({
    pair: "USD-SEK",
    initial: 0,
    current: -1,
    processed: { oscillation: false, negative: true },
  });
  expect(console.history()).toStrictEqual([]);
});
