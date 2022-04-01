const numberOfFilms = prompt("сколько фильмов вы смотрели?", "");

const personalMovieDB = {
     count : numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false

 };

 let lastFilm1 = prompt("один из последних просмотренных фильмов?");
 let lastFilmRaiting1 = prompt("на сколько оцените его?");

 let lastFilm2 = prompt("один из последних просмотренных фильмов?");
 let lastFilmRaiting2 = prompt("на сколько оцените его?");

personalMovieDB.movies[lastFilm1] = lastFilmRaiting1;
personalMovieDB.movies[lastFilm2] = lastFilmRaiting2;


console.log(personalMovieDB);


// lastFilm2 + " : " + lastFilmRaiting2;