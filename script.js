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

const bookDisplay = document.querySelector(".book-display");

function displayBook() {
    bookDisplay.innerHTML = "";
    myLibrary.forEach(book => {

        const bookElement = document.createElement("div");
        bookElement.innerHTML = `
        <div id="${book.id}" class="book">
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages} Pages</p>
            <p>${book.read ? "have read" : "not yet read"}</p>
            <button class="remove-book-btn" data-id="${book.id}">Remove</button>
        </div>        
        `;

        bookDisplay.appendChild(bookElement);
    });
}

displayBook();

const addBookDialog = document.querySelector("dialog");
const showBookDialogBtn = document.querySelector(".add-book-btn");
const closeBookDialogBtn = document.querySelector("#close-dialog");
const addBookBtn = document.querySelector("#add-btn");

showBookDialogBtn.addEventListener("click", () => {
    addBookDialog.showModal();
});

closeBookDialogBtn.addEventListener("click", ()=> {
    addBookDialog.close();
});

addBookBtn.addEventListener("click", (e) => {
    const form = document.querySelector("form");

    if (form.checkValidity() === false) {
        return;
    }

    e.preventDefault();

    const bookInput = document.querySelectorAll("form > input");
    const bookReadInput = document.querySelector("input[type=radio]:checked");

    const title = bookInput[0].value;
    const author = bookInput[1].value;
    const pages = bookInput[2].value;
    const read = bookReadInput.value;
    addBookToLibrary(title, author, pages, read);
    displayBook();

    addBookDialog.close();
    form.reset();
});