
// function Book(title, author, pages, read, id) {
//     if (!new.target) {
//         throw Error("Use new to for constructor.");
//     }

//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.id = id;
// }

// function addBookToLibrary(title, author, pages, read, id) {

//     const book = new Book(title, author, pages, read, id);
//     myLibrary.push(book);

// }

// function displayLibrary() {
//     bookDisplay.innerHTML = "";
//     myLibrary.forEach(book => {

//         const bookElement = document.createElement("div");
//         bookElement.classList.add("book");
//         bookElement.id = book.id;
//         bookElement.innerHTML = `
//             <h2>${book.title}</h2>
//             <p>${book.author}</p>
//             <p>${book.pages} Pages</p>
//             <button class="change-status-btn">${book.read ? "have read" : "not yet read"}</button>
//             <button class="remove-book-btn" data-id="${book.id}">Remove</button>
//         `;

//         bookDisplay.appendChild(bookElement);
//     });
// }

// function addBookToDom(title, author, pages, read, id) {

//     const bookElement = document.createElement("div");
//     bookElement.classList.add("book");
//     bookElement.id = id;
//     bookElement.innerHTML = `
//         <h2>${title}</h2>
//         <p>${author}</p>
//         <p>${pages} Pages</p> 
//     `;

//     const statusBtn = document.createElement("button");
//     read = read === "true";
//     statusBtn.textContent = read ? "have read" : "not yet read";
//     statusBtn.classList.add("change-status-btn");
//     statusBtn.addEventListener("click", changeStatus);
//     bookElement.appendChild(statusBtn);
    
//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     removeBtn.classList.add("remove-book-btn");
//     removeBtn.dataset.id = id;
//     removeBtn.addEventListener("click", removeBook);
//     bookElement.appendChild(removeBtn);

//     bookDisplay.appendChild(bookElement);
// }

// showBookDialogBtn.addEventListener("click", () => {
//     addBookDialog.showModal();
// });

// closeBookDialogBtn.addEventListener("click", ()=> {
//     addBookDialog.close();
// });

// addBookBtn.addEventListener("click", (e) => {
//     const form = document.querySelector("form");

//     if (form.checkValidity() === false) {
//         return;
//     }

//     e.preventDefault();

//     const bookInput = document.querySelectorAll("form > input");
//     const bookReadInput = document.querySelector("input[type=radio]:checked");

//     const title = bookInput[0].value;
//     const author = bookInput[1].value;
//     const pages = bookInput[2].value;
//     const read = bookReadInput.value;

//     const uid = self.crypto.randomUUID();
//     addBookToLibrary(title, author, pages, read, uid);
//     addBookToDom(title, author, pages, read, uid);

//     addBookDialog.close();
//     form.reset();
// });

// function removeBook() {
//     console.log(this.dataset.id);
//     const id = this.dataset.id;
//     myLibrary = myLibrary.filter(book => book.id !== id);
//     const element = document.getElementById(id);
//     element.remove();
// }

// function changeStatus() {
//     const id = this.parentNode.id;
//     const book1 = myLibrary.find(book => book.id === id);
//     book1.toggleRead();
//     this.textContent = book1.read ? "have read" : "not yet read";
// }


// Book.prototype.toggleRead = function() {
//     this.read = !this.read;
// }

// let myLibrary = [];

// const bookDisplay = document.querySelector(".book-display");
// const addBookDialog = document.querySelector("dialog");
// const showBookDialogBtn = document.querySelector(".add-book-btn");
// const closeBookDialogBtn = document.querySelector("#close-dialog");
// const addBookBtn = document.querySelector("#add-btn");
// const removeBookBtn = document.querySelectorAll(".remove-book-btn");
// const statusBookBtn = document.querySelectorAll(".change-status-btn");

// displayLibrary();

// removeBookBtn.forEach(btn => btn.addEventListener("click", removeBook));
// statusBookBtn.forEach(btn => btn.addEventListener("click", changeStatus));


class Library {
    constructor() {
        this.books = [];
    };

    get getBooks() {
        return this.books;
    };

    set addBook(book) {
        this.books.push(book);
    };

    set removeBook(id) {
        this.books = this.books.filter(book => book.getid !== id);
        // TODO: remove book from screen
    };

    findBook(id) {
        return this.books.find(book => book.id === id);
    };
};