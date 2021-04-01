function reduce(...args) {
  let [array, callback, initialValue] = [...args];
  let begin;
  let result;

  if (args.length === 2) {
    begin = 1;
    result = array[0];
  } else {
    begin = 0;
    result = initialValue;
  }

  for (let i = begin; i < array.length; i++) {
    result = callback(result, array[i], i, array);
  }

  return result;
}

module.exports = reduce;
