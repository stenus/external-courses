const Calculator = {
  result: 0,
  add(value) {
    if (value !== undefined) {
      this.result += value;
    }
    return this;
  },

  subtract(value) {
    if (value !== undefined) {
      this.result -= value;
    }
    return this;
  },

  multiply(value) {
    if (value !== undefined) {
      this.result *= value;
    }
    return this;
  },

  divide(value) {
    if (this.result === 0 && value === 0) {
      throw new Error("Trying to divide 0 by 0");
    }

    if (this.result === Infinity && value === Infinity) {
      throw new Error("Trying to divide Infinity by Infinity");
    }

    if (value !== undefined) {
      this.result /= value;
    }

    return this;
  },

  getResult() {
    return this.result;
  },

  reset() {
    this.result = 0;
    return this;
  },

  setState(value) {
    if (value === undefined) {
      return this;
    }

    this.result = value;
    return this;
  },

  fetchData(callback) {
    // loadData emulate request to server
    const loadData = () => {
      return new Promise((fullfil) => {
        setTimeout(() => {
          // the callback is called with value 500 as required in tests
          callback(500);
          fullfil(500);
        }, 2000);
      });
    };

    loadData().then((result) => {
      this.result = result;
    });
  },
};

module.exports = Calculator;
