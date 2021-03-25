function map(array, callback) {
  return array.reduce((filteredArray, item, i, array) => {
    filteredArray.push(callback(item, i, array));
    return filteredArray;
  }, []);
}

module.exports = map;
