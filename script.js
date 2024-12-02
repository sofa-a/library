const form = document.querySelector("form");
const add = document.querySelector(".add");
const container = document.querySelector(".container");
const library = [];
const buttons = document.querySelectorAll('button');

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

const createElement = (tag, properties = {}, ...classes) => {
    const element = document.createElement(tag);
    Object.assign(element, properties);
    if (classes.length) element.classList.add(...classes);
    return element;
}

const addBook = (book) => {
    library.push(book);
    const card = createElement("div", {}, "card");
    const title = createElement("p", {textContent: book.title}, "title");
    const author = createElement("p", {textContent: "Author: " + book.author}, "author");
    const pages = createElement("p", {textContent: "No. Pages: " + book.pages}, "pages");    
    const read = createElement("button", {textContent: "unread"}, "read");
    const remove = createElement("button", {textContent: "remove"}, "remove");
    
    [title, author, pages, read, remove].forEach(element => card.appendChild(element));
    container.appendChild(card);
    ["title", "author", "pages"].forEach(name => (form.elements[name].value = ""));
    buttons = document.querySelectorAll('button');
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const book = new Book(form.elements["title"].value, form.elements["author"].value, form.elements["pages"].value)
    addBook(book); 
});

add.addEventListener("click", function() {
    form.style.display = "flex";
});

exit.addEventListener("click", function() {
    form.style.display = "none";
});


buttons.forEach(read => {
    read.addEventListener("click", function() {
        if (this.textContent == "read") this.textContent = "unread";
        else if (this.textContent == "unread") this.textContent = "read";
    });
})

buttons.forEach(remove => {
    remove.addEventListener("click", function() {
        const card = this.closest(".card");
        card.remove();
    });
})

