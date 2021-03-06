function countEvenOddZeros(array) {
  const numberOfEvenOddZeros = [0, 0, 0];
  array.forEach((item, index, array) => {
    if (typeof item === "number") {
      if (Number.isFinite(item)) {
        if (item === 0) {
          numberOfEvenOddZeros[2]++;
        } else if (item % 2 === 0) {
          numberOfEvenOddZeros[0]++;
        } else {
          numberOfEvenOddZeros[1]++;
        }
      }
    }
  });
  let message = `четных: ${numberOfEvenOddZeros[0]}; нечетных: ${numberOfEvenOddZeros[1]}`;
  if (numberOfEvenOddZeros[2]) {
    message += `; нуль: ${numberOfEvenOddZeros[2]}`;
  }
  console.log(message);
  return numberOfEvenOddZeros;
}

module.exports = countEvenOddZeros;
