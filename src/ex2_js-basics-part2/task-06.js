function reportIsPrime(number) {
  let message;
  if (number === 0 || number === 1 || number > 1000) {
    message = "Данные неверны";
    return message;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      message = `Число ${number} - составное число`;
      return message;
    }
  }
  message = `Число ${number} - простое число`;
  return message;
}

module.exports = reportIsPrime;
