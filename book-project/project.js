const form = document.getElementById ('book-form');
const titleElement = document.getElementById('title');
const autorElement = document.getElementById('autor');
const urlElement = document.getElementById('url');


const ui = new UI();

eventListener();

function eventListener(){
    form.addEventListener('submit',addBook);

}

function addBook(e){
    title = titleElement.value;
    autor = autorElement.value;
    url = urlElement.value;

    if (title ===''|| autor ==='' || url === ''){

        ui.displayMessages('please enter all input...','danger');
    }
    else{
        const newBook = new Book(title,autor,url);
    }



    e.preventDefault();
}