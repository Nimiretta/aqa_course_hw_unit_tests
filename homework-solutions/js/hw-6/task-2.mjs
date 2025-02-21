/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique = [];
let resultNull;
const competitorPizzasLowerCase = [];

for (const pizza of competitorPizzas) {
  competitorPizzasLowerCase.push(pizza.toLowerCase());
}

const mySets = [myPizzasT1, myPizzasT2];

for (const arr of mySets) {
  let isUniqueExistInSet = false;
  for (let i = 0; i < arr.length; i++) {
    if (!competitorPizzasLowerCase.includes(arr[i].toLowerCase())) {
      resultUnique.push(arr[i].toLowerCase());
      if (!isUniqueExistInSet) {
        isUniqueExistInSet = true;
      }
    }
    if (i === arr.length - 1 && !isUniqueExistInSet) {
      resultNull = null;
    }
  }
}

export { resultNull, resultUnique };
