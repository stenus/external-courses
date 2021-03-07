function areAllElementsSame(array) {
  /* чтобы проверить, равны ли все элементы массива между собой, 
    будем сравнивать все элементы с первым */
  const isElementSameWithFirst = (currentElement) =>
    currentElement === array[0];
  return array.every(isElementSameWithFirst);
}

module.exports = areAllElementsSame;
