import axios from "axios";

const BASE_URL = "https://api.uphold.com/v0/ticker";

/**
 * Takes currency pair returns a promise
 * Encapsulate the axios call and return the pure data/responses
 * @param {string} pair Currency pair
 * @returns {function} returns the data or error
 */
const getTickerPair = (pair) =>
  axios.get(`${BASE_URL}/${pair}`).then((res) => res.data);

export { getTickerPair };
