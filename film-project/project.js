const form = document.getElementById('book-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');

const ui = new UI();

eventListener();

function eventListener(){
    form.addEventListener('submit',addFilm);
}

function addFilm(e){
     const title = titleElement.value;
     const director = directorElement.value;
     const url = urlElement.value;

     if(title === '' || director === "" || url===""){ // check to input value fill or empty????
         //Message display
     }
     else {
         const newFilm = new Film(title,director,url);
         ui.addFilmToUI(newFilm);
     }

     e.preventDefault();
}