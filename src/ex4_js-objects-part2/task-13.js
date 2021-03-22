function randomIntegerFrom0To100() {
  const MIN = 0;
  const MAX = 100;
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}

module.exports = randomIntegerFrom0To100;
