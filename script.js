const myLibrary = [];

function Book(title, author, pages, read, id) {
    if (!new.target) {
        throw Error("Use new to for constructor.");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(title, author, pages, read) {
    const uid = self.crypto.randomUUID();
    const book = new Book(title, author, pages, read, uid);
    myLibrary.push(book);
}


function testAddBooksToLibrary() {
    addBookToLibrary("Book 1", "Author 1", 30, true);
    addBookToLibrary("Book 2", "Author 2", 60, true);
    addBookToLibrary("Book 3", "Author 3", 20, false);
    addBookToLibrary("Book 4", "Author 4", 53, false);
}


testAddBooksToLibrary()
console.log(myLibrary);

const bookDisplay = document.querySelector(".book-display");
console.log(bookDisplay);

function displayBook() {
    myLibrary.forEach(book => {

        const bookElement = document.createElement("div");
        bookElement.innerHTML = `
        <div id="${book.id}" class="book">
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages} Pages</p>
            <p>${book.read ? "have read" : "not yet read"}</p>
        </div>        
        `;

        bookDisplay.appendChild(bookElement);
    });
}

displayBook();

const addBookDialog = document.querySelector("dialog");
const showBookDialogBtn = document.querySelector(".add-book-btn");
const closeBookDialogBtn = document.querySelector("#close-dialog")

showBookDialogBtn.addEventListener("click", () => {
    addBookDialog.showModal();
});

closeBookDialogBtn.addEventListener("click", ()=> {
    addBookDialog.close();
});