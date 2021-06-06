import { upholdBot } from "./src/bot.js";
import { Log } from "./src/log.js";
import { getTickerPair } from "./src/tickers.js";
import { oscillation } from "./src/oscillation.js";
import { priceForPair, forPair } from "./src/pair.js";

const CONFIG = {
  currencyPairs: ["BTC-USD", "BTC-SEK", "EUR-SEK"],
  fetchInterval: 5000,
  retriever: priceForPair(getTickerPair, oscillation(0.01)),
  // forPair could take extra outputs such as postgres ....
  forEach: forPair(Log),
};
upholdBot(CONFIG);
