// Falta definir el evento que cuando marquemos en una fila del libro la marque como leída

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

    totalBooks() {
        return this.books.length;
    }

    numberBooksRead() {
        return this.books.filter((book) => book.read).length;
    }

    numberBooksNotReadYet() {
        return this.totalBooks() - this.numberBooksRead();
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

window.addEventListener("load", main);
var lista_libros = new BookList();

function main() {
    let boton_agregar = document.getElementById("agregar_libro");
    boton_agregar.addEventListener("click", agregarLibro);
    mostrarLista(lista_libros);
}

function agregarLibro() {
    let datos_libro = Array(
        document.getElementById("titulo").value,
        document.getElementById("genero").value,
        document.getElementById("autor").value
    );

    lista_libros.add(new Book(...datos_libro));

    mostrarLista(lista_libros);
}

function marcarLeido() {

}

function mostrarLista(lista) {
    let cuerpo_tabla = document.getElementById("tabla_listado").getElementsByTagName("tbody")[0];
    cuerpo_tabla.innerHTML = "";

    lista.books.forEach((libro) => {
        let leido;
        if (!libro.read)
            leido = "Not read";
        else {
            const opciones = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
            leido = "Read on " + libro.readDate.toLocaleDateString('en-EN', opciones);
        }

        let libro_colocar = `<tr><td>${libro.title}</td><td>${libro.author}</td><td>${libro.genre}</td><td>${leido}</td></tr>`;
        cuerpo_tabla.innerHTML += libro_colocar;
    });

    let contador_leidos = document.getElementById("tabla_listado").getElementsByTagName("tfoot")[0];
    contador_leidos.innerHTML = `<tr><td colspan="4">Books Read: ${lista.numberBooksRead()} of ${lista.totalBooks()}</td></tr>`;
}
