let myLibrary = [];

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

function addBookToLibrary(title, author, pages, read, id) {

    const book = new Book(title, author, pages, read, id);
    myLibrary.push(book);

}


function testAddBooksToLibrary() {
    const uid1 = self.crypto.randomUUID();
    const uid2 = self.crypto.randomUUID();
    const uid3 = self.crypto.randomUUID();
    const uid4 = self.crypto.randomUUID();
    addBookToLibrary("Book 1", "Author 1", 30, true, uid1);
    addBookToLibrary("Book 2", "Author 2", 60, true, uid2);
    addBookToLibrary("Book 3", "Author 3", 20, false, uid3);
    addBookToLibrary("Book 4", "Author 4", 53, false, uid4);
}


testAddBooksToLibrary()

const bookDisplay = document.querySelector(".book-display");

function displayBook() {
    bookDisplay.innerHTML = "";
    myLibrary.forEach(book => {

        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.id = book.id;
        bookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages} Pages</p>
            <button class="change-status-btn">${book.read ? "have read" : "not yet read"}</button>
            <button class="remove-book-btn" data-id="${book.id}">Remove</button>
        `;

        bookDisplay.appendChild(bookElement);
    });
}

function addBookToDom(title, author, pages, read, id) {

    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.id = id;
    bookElement.innerHTML = `
        <h2>${title}</h2>
        <p>${author}</p>
        <p>${pages} Pages</p> 
    `;
    
    const statusBtn = document.createElement("button");
    statusBtn.textContent = read ? "have read" : "not yet read";
    statusBtn.classList.add("change-status-btn");
    statusBtn.addEventListener("click", changeStatus);
    bookElement.appendChild(statusBtn);
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-book-btn");
    removeBtn.dataset.id = id;
    removeBtn.addEventListener("click", removeBook);
    bookElement.appendChild(removeBtn);

    bookDisplay.appendChild(bookElement);
}

displayBook();

const addBookDialog = document.querySelector("dialog");
const showBookDialogBtn = document.querySelector(".add-book-btn");
const closeBookDialogBtn = document.querySelector("#close-dialog");
const addBookBtn = document.querySelector("#add-btn");
const removeBookBtn = document.querySelectorAll(".remove-book-btn");
const statusBookBtn = document.querySelectorAll(".change-status-btn");

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

    const uid = self.crypto.randomUUID();
    addBookToLibrary(title, author, pages, read, uid);
    addBookToDom(title, author, pages, read, uid);

    addBookDialog.close();
    form.reset();
});

removeBookBtn.forEach(btn => btn.addEventListener("click", removeBook));

function removeBook() {
    console.log(this.dataset.id);
    const id = this.dataset.id;
    myLibrary = myLibrary.filter(book => book.id !== id);
    const element = document.getElementById(id);
    element.remove();
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

statusBookBtn.forEach(btn => btn.addEventListener("click", changeStatus));


function changeStatus() {
    const id = this.parentNode.id;
    const book1 = myLibrary.find(book => book.id === id);
    book1.toggleRead();
    this.textContent = book1.read ? "have read" : "not yet read";
}