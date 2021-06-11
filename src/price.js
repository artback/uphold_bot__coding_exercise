function priceForPair(getTicker, handler) {
  return function (pair) {
    let initial = null;
    return () =>
      getTicker(pair).then(({ ask }) => {
        if (ask === undefined || ask === null) {
          throw new Error("ask is undefined");
        }
        if (initial === null) {
          initial = ask;
        }
        return {
          pair,
          initial,
          current: ask,
          processed: handler(ask, initial),
        };
      });
  };
}
export { priceForPair };
