function returnMaxNumber(array) {
  /* можно было бы использовать Math.max(), 
    но для практики напишу его реализацию самостоятельно */
  let maxNumber;
  array.forEach((item, index, array) => {
    if (maxNumber && item <= maxNumber) return;
    maxNumber = item;
  });
  return maxNumber;
}

module.exports = returnMaxNumber;
