function reportIsPrime(number) {
  if (number === 0 || number === 1 || number > 1000) {
    return "Данные неверны";
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {;
      return `Число ${number} - составное число`;
    }
  }
  return `Число ${number} - простое число`;
}

module.exports = reportIsPrime;
