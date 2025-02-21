/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const vowels = 'aeiouy';
const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');

let vowelsCount = 0;
let consonantsCount = 0;

for (let i = 0; i < cleanedWord.length; i++) {
  vowels.includes(cleanedWord[i]) ? vowelsCount++ : consonantsCount++;
}

let vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;

export { vowelsAndConsonantsResult };
