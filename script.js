function Book(name, image, summary) {
    this.name = name;
    this.image = image;
    this.summary = summary;
}

const library = [];

const addBook = (book) => library.push(book);

