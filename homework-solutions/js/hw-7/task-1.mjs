/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  const mergedArr = [];
  arrays.forEach((arr) => mergedArr.push(...arr));
  return mergedArr;
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  return sentence
    .split(/\s+/)
    .map((el, i) => {
      return i === 0 ? el.toLowerCase() : el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    })
    .join('_');
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let minus_2 = 1;
  let minus_1 = 1;
  let temp;

  for (let i = 3; i <= n; i++) {
    temp = minus_2 + minus_1;
    minus_2 = minus_1;
    minus_1 = temp;
  }
  return temp;
}

export { mergeArrays, fibonacci, devideBy };
