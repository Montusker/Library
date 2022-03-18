let myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read

}


const book1 = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'Yes')
const book2 = new Book('A Brief History of Humankind', 'Yuval Noah Harari', '416', 'No')

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

const container = document.querySelector('#container');


function drawLibrary() {


}