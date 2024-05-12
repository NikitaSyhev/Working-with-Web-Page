/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Андрей",
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      bcgPicture = document.querySelector('.promo__bg'),
      listOfMovies = document.querySelector('.promo__interactive-list');

//задание 1
adv.forEach(item=> {
    item.remove();
})
//задание 2
genre.innerHTML = 'ДРАМА';

// задание 3
bcgPicture.style.backgroundImage = 'url(img/bg.jpg)';

//задание 4

listOfMovies.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach ((film, i) => {
    listOfMovies.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
    </li>
    `;
});

