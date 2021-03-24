const Calculator = (function () {
  let result = 0;

  return {
    add(value) {
      if (value !== undefined) {
        result += value;
      }
      return Calculator.add;
    },

    subtract(value) {
      if (value !== undefined) {
        result -= value;
      }
      return Calculator.subtract;
    },

    multiply(value) {
      if (value !== undefined) {
        result *= value;
      }
      return Calculator.multiply;
    },

    divide(value) {
      if (result === 0 && value === 0) {
        throw new Error("Trying to divide 0 by 0");
      }

      if (result === Infinity && value === Infinity) {
        throw new Error("Trying to divide Infinity by Infinity");
      }

      if (value !== undefined) {
        result /= value;
      }

      return Calculator.divide;
    },

    getResult: () => result,

    reset() {
      result = 0;
    },
  };
}());

module.exports = Calculator;
