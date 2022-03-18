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

addBookToLibrary(book1);

addBookToLibrary(book2);

function drawLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add("card");
        const bookTitle = document.createElement('h2');
        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add("bookTitle")
        card.appendChild(bookTitle);

        const bookAuthor = document.createElement('h2');
        bookAuthor.textContent = myLibrary[i].author;
        bookAuthor.classList.add("bookAuthor")
        card.appendChild(bookAuthor);

        const bookPages = document.createElement('h2');
        bookPages.textContent = myLibrary[i].pages;
        bookPages.classList.add("bookPages")
        card.appendChild(bookPages);

        const bookRead = document.createElement('h2');
        bookRead.textContent = myLibrary[i].read;
        bookRead.classList.add("bookRead")
        card.appendChild(bookRead);

        container.appendChild(card);
    }


}



// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);