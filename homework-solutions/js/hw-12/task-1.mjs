// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать
// спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds(cbFunc) {
  setTimeout(cbFunc, 2000);
}

delayTwoSeconds(() => {
  console.log('Hi');
});

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1.
// Обработайте промис методом .then и выведите результат его резолва в консоль
const promise = new Promise((resolve) => {
  resolve(1);
});

promise.then((val) => console.log(val));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его реджекта в консоль
const newPromise = new Promise((_, reject) => {
  reject('Promise failed');
});

newPromise.catch((reason) => console.log(reason));

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(num) {
  return new Promise((resolve) => {
    resolve(num);
  });
}

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((values) =>
  values.forEach((el) => console.log(el)),
);

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((values) =>
  values.forEach((val) => console.log(`status: ${val.status}, result: ${val.value}`)),
);

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function promiseAll() {
  try {
    const promises = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    promises.forEach((el) => console.log(el));
  } catch (err) {
    console.error(err);
  }
}

async function settled() {
  try {
    const promises = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    promises.forEach((val) => console.log(`status: ${val.status}, result: ${val.value}`));
  } catch (err) {
    console.error(err);
  }
}

await promiseAll();
await settled();
