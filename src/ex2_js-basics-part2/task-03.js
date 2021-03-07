function countEvenOddZeros(array) {
  const numberOfEvenOddZeros = [0, 0, 0];
  array.forEach((item) => {
    if (typeof item !== "number") {
      return;
    }

    if (!Number.isFinite(item)) {
      return;
    }
    
    if (item === 0) {
      numberOfEvenOddZeros[2] += 1;
    } else if (item % 2 === 0) {
      numberOfEvenOddZeros[0] += 1;
    } else {
      numberOfEvenOddZeros[1] += 1;
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
