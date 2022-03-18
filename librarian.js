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
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i], i);
    }
}

function createBook(book, index) {
    const card = document.createElement('div');
    card.classList.add("card");

    const closeButton = document.createElement('span');
    closeButton.innerHTML = "&times;";
    closeButton.setAttribute("data-index", index);
    closeButton.classList.add("remove-book");

    closeButton.addEventListener('click', () => {
        myLibrary.splice(index, 1)
        drawLibrary();
    });

    card.appendChild(closeButton);


    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.title;
    bookTitle.classList.add("bookTitle")
    card.appendChild(bookTitle);

    const bookAuthor = document.createElement('h2');
    bookAuthor.textContent = book.author;
    bookAuthor.classList.add("bookAuthor")
    card.appendChild(bookAuthor);

    const bookPages = document.createElement('h2');
    bookPages.textContent = book.pages;
    bookPages.classList.add("bookPages")
    card.appendChild(bookPages);

    const bookRead = document.createElement('h2');
    bookRead.textContent = book.read;
    bookRead.classList.add("bookRead")
    card.appendChild(bookRead);

    container.appendChild(card);
}


//  addbook form
let modal = document.getElementById("addBookModal");
let btn = document.getElementById("addBook");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let form = document.getElementById('addBookForm');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    let title = document.getElementById('form-book-title').value;
    let author = document.getElementById('form-book-author').value;
    let pages = document.getElementById('form-book-pages').value;
    let read = document.getElementById('book-read').value;
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    drawLibrary();

});



addBookToLibrary(book1);

addBookToLibrary(book2);
drawLibrary();