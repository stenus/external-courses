function countCharacters(str) {
  let characters = {};

  for (let char of str) {
    if (!characters.hasOwnProperty(char)) {
      characters[char] = 0;
    }

    characters[char] += 1;
  }

  Object.entries(characters).forEach(([char, number]) =>
    console.log(`${char}: ${number}`)
  );
}

module.exports = countCharacters;
