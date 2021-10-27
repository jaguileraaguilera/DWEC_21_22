// COMPROBAR FUNCIONAMIENTO

class Book {
    constructor(title, genre, author, read=false, 
                read_date=undefined) {
        this.title = title;
        this.author = author;
        this.read = read;
        this.read_date = read_date;
    }
}


class BookList {
    constructor(books=[], read=[], not_read=[], current=undefined, 
                next=undefined, last=undefined) {
        this.books = books;
        this.read = read;
        this.not_read = not_read;
        this.current = current;
        this.next = next;
        this.last = last;
    }

    add(book) {
        this.books.push(book);
    }

    finishCurrentBook() {
        this.current.read = true;
        this.current.read_date = new Date(Date.now());
        this.read.push(this.current);
        this.not_read.splice(0,1);
        this.last = this.current;
        this.current = this.next;
        this.next = this.not_read[0];
    }
}
