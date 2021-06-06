function priceForPair(getTicker, handler) {
  return function (pair) {
    let initial = null;
    return {
      pair: pair,
      retriever: () =>
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
export { priceForPair };
