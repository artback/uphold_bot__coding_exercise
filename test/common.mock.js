export function getTicker(price, step) {
  return function () {
    return new Promise((resolve) => {
      resolve({ ask: price,bid: price});
      price= price+ step;
    });
  };
}
export function getTickerReject(reason) {
  return function () {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  };
}
