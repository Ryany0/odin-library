const myLibrary = [];

function Book(title, author, id) {
    if (!new.target) {
        throw Error("Use new to for constructor.");
    }

    this.title = title;
    this.author = author;
    this.id = id;
}

function addBookToLibrary(title, author) {
    const uid = self.crypto.randomUUID();
    const book = new Book(title, author, uid);
    myLibrary.push(book);
}


function testAddBooksToLibrary() {
    addBookToLibrary("Book 1", "Author 1");
    addBookToLibrary("Book 2", "Author 2");
    addBookToLibrary("Book 3", "Author 3");
}


testAddBooksToLibrary()
console.log(myLibrary);

const bookDisplay = document.querySelector(".book-display");
console.log(bookDisplay);

function displayBook() {
    myLibrary.forEach(book => {

        const bookElement = document.createElement("div");
        bookElement.innerHTML = `
        <div id="${book.id}">
            <h2>${book.title}</h2>
            <p>${book.author}</p>
        </div>        
        `;

        bookDisplay.appendChild(bookElement);
    });
}

displayBook();