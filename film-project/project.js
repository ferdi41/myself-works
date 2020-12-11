const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// Start UI Object

const ui = new UI();

//All events upload

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);

}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

if ( title === "" || director === "" || url === ""){
    //Error warning
}
    else {
        /* newFilm */
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm);
    }


    e.preventDefault();
}