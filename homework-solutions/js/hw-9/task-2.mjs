/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character.name !== 'string' || typeof character.age !== 'number') {
    throw new Error('Properties name and age must exist and must be string');
  }
  characters.push(character);
}

function getCharacter(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('String param must be passed');
  }
  return characters.find((character) => character.name === name);
}

function getCharactersByAge(minAge) {
  if (!minAge || typeof minAge !== 'number') {
    throw new Error('Number param must be passed');
  }
  return characters.filter((character) => character.age >= minAge);
}

function updateCharacter(name, newCharacter) {
  if (typeof newCharacter.name !== 'string' || typeof newCharacter.age !== 'number') {
    throw new Error('Properties name and age must exist and must be string');
  }

  const character = getCharacter(name);
  if (character) {
    character.name = newCharacter.name;
    character.age = newCharacter.age;
  } else {
    throw new Error('Character not found');
  }
}

function removeCharacter(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('String param must be passed');
  }

  const indextoRemove = characters.findIndex((character) => character.name === name);
  if (indextoRemove !== -1) {
    characters.splice(indextoRemove, 1);
  } else {
    throw new Error('Character not found');
  }
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
