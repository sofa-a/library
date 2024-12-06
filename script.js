class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }
}

class Library {
    #form;

    constructor() {
        this.#form = document.querySelector("form");
    }

    addBook = (book) => {
        const card = this.createElement("div", {}, "card");
        const title = this.createElement("p", {textContent: book.title}, "title");
        const author = this.createElement("p", {textContent: "Author: " + book.author}, "author");
        const pages = this.createElement("p", {textContent: "No. Pages: " + book.pages}, "pages");    
        const read = this.createElement("button", {textContent: "unread"}, "read");
        const remove = this.createElement("button", {textContent: "remove"}, "remove");
        
        [title, author, pages, read, remove].forEach(element => card.appendChild(element));
        document.querySelector(".container").appendChild(card);
        
        ["title", "author", "pages"].forEach(name => (form.elements[name].value = ""));
        buttons = document.querySelectorAll('button');
    }

    initSubmit = () => {
        this.#form.addEventListener("submit", function(event) {
            event.preventDefault();
            const book = new Book(
                this.#form.elements["title"].value, 
                this.#form.elements["author"].value, 
                this.#form.elements["pages"].value);
            this.addBook(book); 
        }.bind(this));    
    }

    createElement = (tag, properties = {}, ...classes) => {
        const element = document.createElement(tag);
        Object.assign(element, properties);
        if (classes.length) element.classList.add(...classes);
        return element;
    }

    toggleRead = (target) => {
        if (target.textContent == "read") target.textContent = "unread";
        else if (target.textContent == "unread") target.textContent = "read";
    };

    removeBook = (target) => {
        const card = target.closest(".card");
        card.remove();
    };

    initAdd = () => {
        document.querySelector(".add").addEventListener("click", function() {
            document.querySelector("form").style.display = "flex";
        });
    }
    
    initExit = () => {
        exit.addEventListener("click", function() {
            document.querySelector("form").style.display = "none";
        });
    }

    initReadRemove = () => {
        document.addEventListener("click", function(event) {
            const target = event.target;
            if (target.classList.contains("read")) this.toggleRead(target);
            else if (target.classList.contains("remove")) this.removeBook(target);
        }.bind(this));
    }
}

const main = () => {
    const library = new Library();
    library.initSubmit();
    library.initAdd();
    library.initExit();
    library.initReadRemove();
}

main();