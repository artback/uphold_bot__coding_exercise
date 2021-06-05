import mockAxios from "axios";
import { getTickerPair } from "../src/tickers";
import "regenerator-runtime";

test("getTickers", async () => {
  const expected = { ask: "1.21837", bid: "1.21589", currency: "USD" };
  mockAxios.get = () =>
    Promise.resolve({
      data: expected,
    });
  const data = await getTickerPair("EUR-USD");
  expect(data).toStrictEqual(expected);
});

test("getTickers", async () => {
  const expected = "something happened";
  mockAxios.get = () =>
      Promise.reject({
        response: "something happened",
      });
  try {
      await getTickerPair("EUR-USD");
  }catch(e){
      expect(e).toStrictEqual(expected);
  }
});
