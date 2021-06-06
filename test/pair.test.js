import "regenerator-runtime";
import { forPair } from "../src/pair.js";
import { getTicker, getTickerReject } from "./common.mock.js";

import makeConsoleMock from "consolemock";
console = makeConsoleMock(console);

test("forPair resolved getTicker", async () => {
  const fP = forPair((pair, data) => {
    expect(pair).toStrictEqual("USD-EUR");
    expect(data).toStrictEqual({ ask: 0, bid: 0 });
  });
  await fP({ pair: "USD-EUR", retriever: getTicker(0, 0) });
});

test("forPair rejected getTicker", async () => {
  const fP = forPair((pair, data) => {
    expect(pair).toStrictEqual("USD-EUR");
    expect(data).toBeUndefined();
  });
  await fP({
    pair: "USD-EUR",
    retriever: getTickerReject("something happened"),
  });
  expect(console.history()).toStrictEqual([{ ERROR: ["something happened"] }]);
});
