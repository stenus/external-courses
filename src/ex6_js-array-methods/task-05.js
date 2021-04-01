function map(array, callback) {
  return array.reduce((filteredArray, item, i, array) => {
    return [...filteredArray, callback(item, i, array)];
  }, []);
}

module.exports = map;
