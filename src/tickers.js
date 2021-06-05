import axios from "axios";

const BASE_URL = "https://api.uphold.com/v0/ticker";

/**
 * Takes currency pair returns a promise
 * Encapsulate the axios call and return the pure data/responses
 * @param {string} pair
 * @returns {function}
 */
const getTickerPair = (pair) =>
  axios
    .get(`${BASE_URL}/${pair}`)
    .then((res) => res.data)
    .catch((e) => {
      throw e.response;
    });

export { getTickerPair };
