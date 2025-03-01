/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  return [...wordsArr].sort((a, b) => getVowelsCount(a) - getVowelsCount(b));
}

function getVowelsCount(word) {
  const vowels = 'aeiouy';
  return word.split('').filter((el) => vowels.includes(el)).length;
}

export { sortedByVowels };
