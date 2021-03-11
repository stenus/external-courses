function addNewProperty(property, object) {
  /* линтер ругался, если я пытался явно модифицировать 
  объект в функции (ошибка no-param-reassign),
  но это ограничение удалось обойти, 
  изменяя объект методом Object.assing() */
  if (property in object) {
    return object;
  }
  return Object.assign(object, { [property]: "new" });
}

module.exports = addNewProperty;
