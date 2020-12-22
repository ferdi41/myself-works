function UI (){

}

UI.prototype.addFilmToUI = function(newFilm){
    const films= document.getElementById('films');

    films.innerHTML +=`

    <tr>
         <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    
    `;
}

UI.prototype.displayMessages= function(message,type){
    const cardBody = document.querySelector('.card-body');
    const div = document.createElement('div');

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.append(div);
}