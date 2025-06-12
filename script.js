
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
        this.books = this.books.filter(book => book.getId !== id);
    };

    findBook(id) {
        return this.books.find(book => book.id === id);
    };
};

class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
    }

    changeStatus() {
        this.read = !this.read;
    }

    get getTitle() {
        return this.title;
    }

    get getAuthor() {
        return this.author;
    }

    get getPages() { 
        return this.pages;
    }

    get getStatus() {
        return this.read;
    }

    get getId() {
        return this.id;
    }
}

const libraryManager = (function() {

    const library = new Library();

    const removeBook = (id) => {
        library.removeBook = id;
    };

    const addBookToLibrary = (book) => {
        library.addBook = book;
    };

    const changeStatus = (id) => {
        const book = library.findBook(id);
        book.changeStatus();
        return book.getStatus;
    }

    const getlibrary = () => {
        return library;
    };

    return { removeBook, changeStatus, addBookToLibrary, getlibrary }
})();

const domManager = (function (){

    
    const bookDisplay = document.querySelector(".book-display");
    const addBookDialog = document.querySelector("dialog");
    const showBookDialogBtn = document.querySelector(".add-book-btn");
    const closeBookDialogBtn = document.querySelector("#close-dialog");
    const addBookBtn = document.querySelector("#add-btn");
    const removeBookBtn = document.querySelectorAll(".remove-book-btn");
    const statusBookBtn = document.querySelectorAll(".change-status-btn");
    const template = document.querySelector("#book-template");
    const form = document.querySelector("form");
    const bookInput = document.querySelectorAll("form > input");
    const bookReadInput = document.querySelector("input[type=radio]:checked");

    const removeBookFromDOM = (e) => {
        const id = e.target.dataset.id;
        e.target.parentElement.remove();
        libraryManager.removeBook(id);
    }

    const changeDOMStatus = (e) => {
        const id = e.target.parentElement.id;
        const newStatus = libraryManager.changeStatus(id);
        e.target.textContent = newStatus ? "Read" : "Not Read";
    }

    const addBookToDom = (book) => {

        const clone = template.content.cloneNode(true);
        const h2 = clone.querySelector("h2");
        const p = clone.querySelectorAll("p");
        const btn = clone.querySelectorAll("button");
        const container = clone.querySelector(".book");

        h2.textContent = book.getTitle;
        p[0].textContent = book.getAuthor;
        p[1].textContent = book.getPages + "pages";

        btn[0].textContent = book.getStatus ? "Read" : "Not Read";
        btn[0].addEventListener("click", changeDOMStatus);

        btn[1].dataset.id = book.getId;
        btn[1].addEventListener("click", removeBookFromDOM);

        container.id = book.getId;

        bookDisplay.appendChild(clone);
    };

    const createBook = (e) => {

        if (form.checkValidity() === false) {
            return;
        }

        e.preventDefault();

        const title = bookInput[0].value;
        const author = bookInput[1].value;
        const pages = bookInput[2].value;
        const read = bookReadInput.value === "true";
        const uid = self.crypto.randomUUID();

        const newBook = new Book(title, author, pages, read, uid);
        libraryManager.addBookToLibrary(newBook);
        addBookToDom(newBook);

        addBookDialog.close();
        form.reset();
    };

    
    showBookDialogBtn.addEventListener("click", () => {
        addBookDialog.showModal();
    });

    closeBookDialogBtn.addEventListener("click", ()=> {
        addBookDialog.close();
    });

    addBookBtn.addEventListener("click", createBook);
})();