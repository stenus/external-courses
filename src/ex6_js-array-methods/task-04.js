function filter(array, callback) {
  return array.reduce((filteredArray, item, i, array) => {
    if (callback(item, i, array)) {
      return [...filteredArray, item];
    }
    return filteredArray;
  }, []);
}

module.exports = filter;
