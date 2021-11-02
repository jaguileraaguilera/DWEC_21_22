/* COMPROBAR FUNCIONAMIENTO, EXTENDER FUNCIONALIDAD, POR EJEMPLO, AÑADIR UN
MÉTODO QUE PERMITA ALTERAR EL ORDEN DE LOS LIBROS QUE NO SE HAN LEIDO.
OTRO MÉTODO QUE PERMITA SACAR UN LIBRO DE LA LISTA, SI NO SE HA LEIDO ENTONCES
SE SACA TAMBIEN DE LA LISTA DE NO LEIDO. EN CASO DE QUE SE HAYA LEIDO, SE
DEJA EN LA LISTA DE LEIDOS.
SI AÑADIMOS A LA LISTA UN LIBRO QUE COINCIDE EN TITULO Y AUTOR CON OTRO EN LA
LISTA DE LEIDOS, ENTONCES LO ESTABLECEMOS COMO LEIDO Y LO AÑADIMOS A LEIDOS.
*/

class Book {
    constructor(title, genre, author, read=false, 
                read_date=undefined) {
        this.title = title;
        this.author = author;
        this.read = read;
        this.read_date = read_date;
    }
}

// Corregirlo
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
        (book.read) ? this.read.push(book) : this.not_read.push(book);
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


//Pruebas
let b1 = new Book('Primer_libro', 'Cuentos', 'Periquillo');
let b2 = new Book('Segundo_libro', 'Policíaca', 'Juanillo');    
let b3 = new Book('Tercer_libro', 'Histórica', 'Antoñito');
let booklist = new BookList();
