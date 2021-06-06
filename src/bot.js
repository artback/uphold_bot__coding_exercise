/**
 * @param {Object} config Configuration to run bot
 * @param {number} config.fetchInterval interval in ms between each fetch,
 * @param {function} config.retriever used on each currency pair to retrieve new data
 * @param {[]string} config.currencyPairs Array of all the currency pairs to use as input for the retriever
 * @param {function({pair: string,retriever: function})} config.forEach
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
