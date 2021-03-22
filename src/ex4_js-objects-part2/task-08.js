function toLowerCamelCase(str) {
  let words = str.split(" ");
  let [firstWord, restWords] = [words[0], words.slice(1)];

  function toCamelCase(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  return (
    firstWord.toLowerCase() +
    restWords.map((word) => toCamelCase(word)).join("")
  );
}

module.exports = toLowerCamelCase;
