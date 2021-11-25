class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.read_date = null;
    }
}


class BookList {
    constructor() {
        this.books = [];
        this.currentBook = 0;
    }

    get numberBooksRead() {
        return this.books.filter((book) => book.read).length;
    }

    get numberBooksNotReadYet() {
        return this.books.length - this.numberBooksRead;
    }

    get totalBooks() {
        return this.books.length;
    }

    add(book) {
        this.books.push(book);
    }

    finishCurrentBook() {
        if (this.currentBook < this.totalBooks()) {
            this.books[this.currentBook].read = true;
            this.books[this.currentBook].readDate = new Date();
            this.currentBook++;
        }
    }
}

