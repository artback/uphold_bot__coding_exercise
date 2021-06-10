import {
  upholdBot,
  getTickerPair,
  forPair,
  priceForPair,
  oscillation,
  Log,
} from "./src/index.js";

const CONFIG = {
  currencyPairs: ["BTC-USD", "BTC-SEK", "EUR-SEK"],
  fetchInterval: 5000,
  retriever: priceForPair(getTickerPair, oscillation(0.01)),
  // forPair could take extra outputs such as postgres ....
  forEach: forPair(Log),
};
upholdBot(CONFIG);
