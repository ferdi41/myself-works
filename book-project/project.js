const form = document.getElementById ('book-form');
const titleElement = document.getElementById('title');
const autorElement = document.getElementById('autor');
const urlElement = document.getElementById('url');


const ui = new UI();
const storage = new Storage();

eventListener();

function eventListener(){
    form.addEventListener('submit',addBook);
    document.addEventListener('DOMContentLoaded',function(){
        let books = storage.getBookFromStorage();
         ui.loadAllBooks(books);
   

    });

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

        ui.addBookToUI(newBook);
        storage.addBookToStorage(newBook);
       
    }


    e.preventDefault();
}