function printElements(array) {
  array.forEach((item) => {
    console.log(item);
  });
  console.log(array.length);
  return;
}

module.exports = printElements;
