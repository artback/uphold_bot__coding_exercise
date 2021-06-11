import { upholdBot } from "../src/bot";
import "regenerator-runtime";
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.useRealTimers();
});
test("bot test, send Data", async () => {
  const PAIR = "USD-EUR";
  const event = upholdBot({
    fetchInterval: 500,
    retriever: () => () => Promise.resolve(0.5),
    currencyPairs: ["USD-EUR"],
  });
  event.onData((data) => {
    expect(data).toStrictEqual(0.5);
  });
  jest.advanceTimersByTime(500);
});
test("bot test,send Error", async () => {
  const PAIR = "USD-EUR";
  const event = upholdBot({
    fetchInterval: 500,
    retriever: () => () => Promise.reject("something"),
    currencyPairs: ["USD-EUR"],
  });
  event.onError((e) => {
    expect(e).toStrictEqual("something");
  });
  jest.advanceTimersByTime(500);
});
