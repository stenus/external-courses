function filter(array, callback) {
  return array.reduce((filteredArray, item, i, array) => {
    if (callback(item, i, array)) {
      filteredArray.push(item);
    }
    return filteredArray;
  }, []);
}

module.exports = filter;
