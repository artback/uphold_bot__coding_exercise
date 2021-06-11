import { EventEmitter } from "events";
/**
 * @param {Object} config Configuration to run bot
 * @param {number} config.fetchInterval interval in ms between each fetch,
 * @param {function} config.retriever used on each currency pair to retrieve new data
 * @param {[]string} config.currencyPairs Array of all the currency pairs to use as input for the retriever
 */
export const upholdBot = ({ fetchInterval, retriever, currencyPairs }) => {
  const eventEmitter = new EventEmitter();
  const retrievers = currencyPairs.map(retriever);
  const timeout = setInterval(
    () =>
      retrievers.forEach((r) =>
        r()
          .then((d) => eventEmitter.emit("data", d))
          .catch((e) => eventEmitter.emit("error", e))
      ),
    fetchInterval
  );
  return {
    timeout,
    onUpdate: (callback) => eventEmitter.on("data", callback),
    onError: (callback) => eventEmitter.on("error", callback),
  };
};
