export function getTicker(price, step) {
  return function () {
    return new Promise((resolve) => {
      resolve({ ask: price, bid: price });
      price = price + step;
    });
  };
}
