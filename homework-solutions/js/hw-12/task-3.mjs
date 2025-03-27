// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей.
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах.
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий.
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId).
//       Пример:
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell
//           email: Shanna@melissa.tv
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)

const usersRequest = fetch('https://jsonplaceholder.typicode.com/users');
const albumsRequest = fetch('https://jsonplaceholder.typicode.com/albums');
const photosRequest = fetch('https://jsonplaceholder.typicode.com/photos');

const [usersResponse, albumsResponse, photosResponse] = await Promise.all([usersRequest, albumsRequest, photosRequest]);
const users = await usersResponse.json();
const albums = await albumsResponse.json();
const photos = await photosResponse.json();

const resultArr = [];
users.forEach((user) => {
  resultArr.push({
    name: user.name,
    email: user.email,
    phone: user.phone,
    company: user.company.name,
    albums: getUserAlbums(user.id),
  });
});

function getUserAlbums(userId) {
  const userAlbums = albums.filter((album) => album.userId === userId);
  return userAlbums.map((album) => `${album.title} (${getAlbumPhotosCount(album.id)} photos)`);
}

function getAlbumPhotosCount(albumId) {
  return photos.filter((el) => el.albumId === albumId).length;
}

printUsers(resultArr);

function printUsers(users) {
  const divider = '_'.repeat(50);
  users.forEach((user, i) => {
    i++;
    for (const [key, value] of Object.entries(user)) {
      switch (key) {
        case 'name':
          console.log(`${i}.  ${key}: ${value}`);
          break;
        case 'albums':
          console.log(`    ${key}:`);
          value.forEach((el) => console.log(`        ${el}`));
          break;
        default:
          console.log(`    ${key}: ${value}`);
      }
    }
    if (i !== users.length) {
      console.log(divider + '\n');
    }
  });
}
