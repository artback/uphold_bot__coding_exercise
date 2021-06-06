/**
 * Returns a function awaits the retriever call and runs all the output functions with the given data
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
