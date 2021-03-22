function insertAfterWord(str, substr, wordNumber) {
  let words = str.split(" ");
  words.splice(wordNumber + 1, 0, substr);
  return words.join(" ");
}

module.exports = insertAfterWord;
