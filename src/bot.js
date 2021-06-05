/**
 * @param {{
 * fetchInterval: number, precision: number, currencyPairs: string[],
 * forPair: function({pair: string,retriever: function()}),
 * getTicker: function(pair: string)
 * priceForPair: function(pair: string)
 * }} CONFIG
 */
export const upholdBot = ({
  fetchInterval,
  priceForPair,
  currencyPairs,
  forPair,
}) => {
  const retrievers = currencyPairs.map(priceForPair);
  setInterval(() => retrievers.forEach(forPair), fetchInterval);
};
