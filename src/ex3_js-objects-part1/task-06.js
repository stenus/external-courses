function getDeepClone(object) {
  function getObjectClone(object) {
    let clone = {};
    for (const [key, value] of Object.entries(object)) {
      if (Array.isArray(value)) {
        Object.assign(clone, { [key]: getArrayClone(value) });
        continue;
      }

      if (value === null) {
        Object.assign(clone, { [key]: null });
        continue;
      }

      if (typeof value === "object") {
        Object.assign(clone, { [key]: getObjectClone(value) });
        continue;
      }
      Object.assign(clone, { [key]: value });
    }
    return clone;
  }

  function getArrayClone(array) {
    return array.map((item) => {
      if (Array.isArray(item)) {
        return getArrayClone(item);
      }

      if (typeof item === "object") {
        return getObjectClone(item);
      }
      return item;
    });
  }

  return getObjectClone(object);
}

module.exports = getDeepClone;
