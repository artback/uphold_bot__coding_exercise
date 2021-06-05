import { priceForPair, forPair } from "../src/pair.js";
import { getTicker, getTickerReject } from "./common.mock.js";
import makeConsoleMock from "consolemock";
console = makeConsoleMock(console);

import "regenerator-runtime";

function handler(data) {
  return function () {
    return data;
  };
}

test("priceForPair: negative oscillation", async () => {
  const fn = priceForPair(
    getTicker(5, 0.05),
    handler({ oscillation: true, negative: true })
  )("EUR-SEK");
  await fn.retriever();
  const data = await fn.retriever();
  expect(data).toStrictEqual({
    initial: 5,
    current: 5.05,
    processed: { oscillation: true, negative: true },
  });
});

test("forPair resolved getTicker", async () => {
  const fP = forPair((pair, data) => {
    expect(pair).toStrictEqual("USD-EUR");
    expect(data).toStrictEqual({ ask: 0,bid:0 });
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
  expect(console.history()).toStrictEqual([{ERROR: ["something happened"]}])
});
