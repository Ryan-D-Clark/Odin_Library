let myLibrary = [
    {"title":"A Game Of Thrones","author": "George R.R. Martin","pages": 694,"isRead": true},
    {"title":"A Feast For Crows","author": "George R.R. Martin","pages": 753,"isRead": true},
    {"title":"The Winds Of Winter","author": "George R.R. Martin","pages": 1700,"isRead": false}
];
let bookContainer = document.getElementById("book-container")

let formContainer = document.getElementById("book-form")

function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = function(){
        return `${this.title}, ${this.author}, ${this.pages}, ${this.isRead}`
    }
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook)
}

function unpackLibrary(){

    for (pos in myLibrary){
        let newElement = `
        <div class="book">
        <p class="book-title">${myLibrary[pos].title}</p>
        <div class="author">${myLibrary[pos].author}</div>
        <div class="page-container">
            <p class="pages-label">PAGES:</p>
            <p class="pages-value">${myLibrary[pos].pages}</p>
        </div>
        <div class="completed-container">
            <label class="completed-label">COMPLETED</label>
            <input class="completed-checkbox" ${myLibrary[pos].isRead ? "checked" : ""} type="checkbox">
        </div>
        <i class="delete-button fa-solid fa-trash" onclick="information()"></i>
    </div>`
        bookContainer.insertAdjacentHTML("beforeend", newElement)
    }
}

function displayForm(){

    if (formContainer.style.display == ""){
        formContainer.style.display = "block"
    }
    else{
        formContainer.style.display = ""
    }
}

function createBook(title, author, pages, isRead){
    if (title == "" || author == "" || pages == "" || isRead == ""){
        return 
    }
    console.log(`${title}, ${author}, ${pages} ${isRead}`)
    addBookToLibrary(new Book(title, author, pages, isRead))
    let newElement = `
    <div class="book">
        <p class="book-title">${title}</p>
        <div class="author">${author}</div>
        <div class="page-container">
            <p class="pages-label">PAGES:</p>
            <p class="pages-value">${pages}</p>
        </div>
        <div class="completed-container">
            <label class="completed-label">COMPLETED</label>
            <input class="completed-checkbox" ${isRead ? "checked" : ""} type="checkbox">
        </div>
    </div>`
    bookContainer.insertAdjacentHTML("beforeend", newElement)
}

function closeForm(){
    formContainer.style.display = ""
}

function information(){
    console.log(this)
}

// let book = new Book("Test", "GGM", 5, true)

// let book2 = new Book("Test2", "RRM", 19, true)

// addBookToLibrary(book)
// addBookToLibrary(book2)

unpackLibrary()
