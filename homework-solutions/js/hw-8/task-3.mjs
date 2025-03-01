/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const sortedArr = [...numbers].sort((a, b) => a - b);
  if (sortedArr[0] !== 1) return 1;
  let missNumInMiddle = sortedArr.find((el, i, arr) => arr[++i] - el === 2);
  if (missNumInMiddle) {
    return ++missNumInMiddle;
  } else {
    return ++sortedArr[sortedArr.length - 1];
  }
}

export { findMissingNumber };
