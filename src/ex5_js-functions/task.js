const Calculator = (function () {
  let result = 0;

  return {
    add(value) {
      if (Number.isFinite(value)) {
        result += value;
      }
      return Calculator.add;
    },

    subtract(value) {
      if (Number.isFinite(value)) {
        result -= value;
      }
      return Calculator.subtract;
    },

    multiply(value) {
      if (Number.isFinite(value)) {
        result *= value;
      }
      return Calculator.multiply;
    },

    divide(value) {
      if (Number.isFinite(value)) {
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
