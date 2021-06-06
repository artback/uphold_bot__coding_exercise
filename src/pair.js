/**
 * Returns a function which runs all the given output functions given a currency pair and it's retriever function
 * @param {...function} outputFn  For storage or logging the result
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

export { forPair };
