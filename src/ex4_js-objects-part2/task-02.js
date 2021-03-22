function getObjectWithoutPrototype() {
  return Object.create(null);
}

module.exports = getObjectWithoutPrototype;
