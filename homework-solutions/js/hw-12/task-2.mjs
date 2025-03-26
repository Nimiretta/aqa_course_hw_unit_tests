// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(todo) {
  let resData = null;
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (res.status !== 201) throw new Error('Create Todo failed');

    resData = await res.json();
    for (const key of Object.keys(todo)) {
      if (todo[key] !== resData[key]) throw new Error(`${key} value in created entity is incorrect`);
    }
  } catch (err) {
    console.error(err);
  } finally {
    console.log('The End');
    return resData;
  }
}

console.log(
  await createTodo({
    title: 'I am ToDo',
    userId: 5,
    completed: false,
  }),
);
