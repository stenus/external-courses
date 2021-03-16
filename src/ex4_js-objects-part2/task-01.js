function getPropertyFromPrototype(prop, obj) {
  return Object.getPrototypeOf(obj)[prop];
}

module.exports = getPropertyFromPrototype;
