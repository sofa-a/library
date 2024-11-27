function Book(name, image, summary) {
    this.name = name;
    this.image = image;
    this.summary = summary;
}

const library = [];

const addBook = (book) => library.push(book);

const form = document.querySelector("form");
const container = document.querySelector(".container");

form.addEventListener("submit", function(event) {
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("p");
    title.textContent = form.elements["title"].value;
    title.classList.add("title");
    const author = document.createElement("p");
    author.textContent = form.elements["author"].value;
    author.classList.add("author");
    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = form.elements["pages"].value;

    const read = document.createElement("button");
    read.textContent = "Read";
    read.classList.add("read");
    const remove = document.createElement("button");
    remove.textContent = "Remove Book"
    remove.classList.add("remove");

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(remove);
    container.appendChild(card);

    form.elements["title"].value = "";
    form.elements["author"].value = "";
    form.elements["pages"].value = "";

    event.preventDefault();
});