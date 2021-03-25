function slice(array, begin = 0, end = array.length) {
  let preparedBegin = begin < 0 ? array.length + begin : begin;
  let preparedEnd = end < 0 ? array.length + end : end;
  return array.filter((item, i) => i >= preparedBegin && i < preparedEnd);
}

module.exports = slice;
