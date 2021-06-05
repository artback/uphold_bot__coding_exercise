const Log = (pair, { initial, current, processed: { oscillation, negative } }) => {
  if (oscillation) {
    if (negative) {
      console.log(`${pair} went down from ${initial} to ${current}`);
      return;
    }
    console.log(`${pair} went up from ${initial} to ${current}`);
  }
};

export { Log };
