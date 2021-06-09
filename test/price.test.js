import { priceForPair } from "../src/price.js";
import { getTicker } from "./common.mock";
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

test("priceForPair: ask is undefined", async () => {
  const fn = priceForPair(
    () => Promise.resolve({}),
    handler({ oscillation: true, negative: true })
  )("EUR-SEK");
  try {
    await fn.retriever();
  } catch (e) {
    expect(e).toBeInstanceOf(Error);
  }
});
