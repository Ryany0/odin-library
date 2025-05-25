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

