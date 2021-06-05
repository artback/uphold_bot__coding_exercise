function priceForPair(getTicker, handler) {
  return function (pair) {
    let initial = null;
    return {
      pair: pair,
      retriever: () =>
        // Usually the rate of an asset is defined not by the highest bid
          // or the lowest ask but by price of the latest exchange
        getTicker(pair).then(({ ask }) => {
          if (initial === null) {
            initial = ask;
          }
          return {
            initial,
            current: ask,
            processed: handler(ask, initial),
          };
        }),
    };
  };
}

/**
 * Returns a function which runs all the given output functions given a currency pair and it's retriever function
 * @param outputFn
 */
function forPair(...outputFn) {
  return async function ({ pair, retriever }) {
    try {
      const data = await retriever();
      outputFn.forEach((fn) => fn(pair, data));
    } catch (e) {
      console.error(e);
    }
  };
}

export { priceForPair, forPair };
