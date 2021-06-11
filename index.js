import {
  upholdBot,
  getTickerPair,
  priceForPair,
  oscillation,
  Log,
} from "./src/index.js";

const CONFIG = {
  currencyPairs: ["BTC-USD", "BTC-SEK", "EUR-SEK"],
  fetchInterval: 5000,
  retriever: priceForPair(getTickerPair, oscillation(0.01)),
};

const bot = upholdBot(CONFIG);
bot.onUpdate(Log);
bot.onError((e) => console.error(e));
