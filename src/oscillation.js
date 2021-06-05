/**
 * Takes precision in percentage returns a function that calculates if oscillation between two numbers
 * @param {number} precision
 * @returns {function}
 */
export function oscillation(precision) {
  /**
   * Takes number pairs return is oscillation and if it is negative oscillation
   * @param {number} number1
   * @param {number} number2
   * @returns {object}{oscillation: number,negative: number}
   */
  return (number1, number2) => {
    const diff = number2-number1;
    return {
      oscillation: Math.abs((diff /number1)*100) > precision,
      negative: diff < 0,
    };
  };
}
