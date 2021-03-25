function reduce(array, callback, initialValue) {
  let begin, result;

  if (arguments.length === 2) {
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
