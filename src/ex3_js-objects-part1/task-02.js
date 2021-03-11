function printAllKeysValues(object) {
  for (const [key, value] of Object.entries(object)) {
    console.log(key, value);
  }
  return;
}

module.exports = printAllKeysValues;
