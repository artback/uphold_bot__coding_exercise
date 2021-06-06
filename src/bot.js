/**
 * @param {Object} config Configuration to run bot
 * @param {number} config.fetchInterval interval in ms between each fetch,
 * @param {function} config.retriever used on each currency pair to retrieve new data
 * @param {[]string} config.currencyPairs
 * @param {function} config.forEach run after each currency pair data have been retrieved
 */
export const upholdBot = ({
  fetchInterval,
  retriever,
  currencyPairs,
  forEach,
}) => {
  const retrievers = currencyPairs.map(retriever);
  setInterval(() => retrievers.forEach(forEach), fetchInterval);
};
