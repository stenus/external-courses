function printElements(array) {
  array.forEach((item, index, array) => {
    console.log(item);
  });
  console.log(array.length);
  return;
}

module.exports = printElements;
