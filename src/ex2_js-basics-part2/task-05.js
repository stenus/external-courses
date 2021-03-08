function getMaxNumber(array) {
  /* можно было бы использовать Math.max(), 
    но для практики напишу его реализацию самостоятельно */
return array.reduce((max, current) => (current > max) ? current : max);
}

module.exports = getMaxNumber;
