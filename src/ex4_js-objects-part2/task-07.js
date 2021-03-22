function truncate(str, maxLength) {
  return str.length > maxLength ? str.substring(0, maxLength - 1) + "…" : str;
}

module.exports = truncate;
