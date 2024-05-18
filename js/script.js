/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', ()=> {
const movieDB = {
    movies: [
            "Люди ИКС",
            "Хало",
            "Гари Поттер",
            "Немезида",
            "Андрей",
    ]
  };
    
const adv = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
        bcgPicture = document.querySelector('.promo__bg'),
        listOfMovies = document.querySelector('.promo__interactive-list'),
        formAddingImput = document.querySelector('.adding__input'),
        buttonConfirn = document.querySelector('button'),
        checkbox = document.querySelector('[type="checkbox"]');

    
//функция создания списка фильмов
function createListOfMovies () {
        movieDB.movies.sort();
        movieDB.movies.forEach ((film, i) => {
            listOfMovies.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
            </li>
            `;
        });
    //обработчик удаления фильмов
    document.querySelectorAll('.delete').forEach((btn,i) => {
        btn.addEventListener('click', ()=> {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            listOfMovies.innerHTML = "";
            createListOfMovies();
        })
    })
}

//обработчик добавления фильмов
buttonConfirn.addEventListener('click', (e)=> {
        e.preventDefault();
        let movie = formAddingImput.value;
        let favoriteMovies = checkbox.checked;
        
        if(movie) {
        if (movie.length > 21) {
            movie = movie.substring(0, 20) + '...';
        }
        if(favoriteMovies) {
            alert('Вы отметили любимый фильм !');
        }
        movieDB.movies.push(`${movie}`);
        listOfMovies.innerHTML = "";
        createListOfMovies();
    }
})

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
    
createListOfMovies();   
})



