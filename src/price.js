function priceForPair(getTicker, handler) {
  return function (pair) {
    let initial = null;
    return {
      pair: pair,
      retriever: () =>
        getTicker(pair).then(({ ask }) => {
          if(ask === undefined || ask === null){
             throw new Error("ask is undefined");
          }
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
