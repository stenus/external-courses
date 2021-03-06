function numberOrString(value) {
  if (typeof value === "number") {
    if (Number.isNaN(value)) {
      return undefined;
    }
    return "number";
  }
  if (typeof value === "string") {
    return "string";
  }
  return undefined;
}

module.exports = numberOrString;
