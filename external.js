let bookCardContainer = document.getElementById("book-card-container")
let addBookButton = document.getElementById("add-book")
let wipeLibraryButton = document.getElementById("wipe-library")
let removeBookButton = document.getElementById("remove-book")

let modal = document.getElementById("modal")
let title = document.getElementById("title")
let author = document.getElementById("author")
let pages = document.getElementById("pages")
let hasRead = document.getElementsByName("has-read")
let createButton = document.getElementById("create-button")


const myLibrary = []

function addBookToLibrary(bookObject){
    myLibrary.push(bookObject)
}

addBookButton.addEventListener("click", () =>{
    console.log(modal)
    modal.showModal()
    console.log(modal.hidden)
})

createButton.addEventListener("click", () =>{
    console.log(title.value,author.value,pages.value, hasRead)
})


function displayLibrary(){
    for(let book of myLibrary){
        const card = document.createElement("div")
        card.classList.add("card")

        const cardTitle = document.createElement("div")
        cardTitle.textContent = book.title
        cardTitle.classList.add("card-title")
        card.appendChild(cardTitle)

        const cardAuthor = document.createElement("div")
        cardAuthor.textContent = `By ${book.author}`
        cardAuthor.classList.add("card-author")
        card.appendChild(cardAuthor)

        const cardPages = document.createElement("div")
        cardPages.textContent = `${book.pageCount} pages`
        cardPages.classList.add("card-pages")
        card.appendChild(cardPages)

        const cardReadStatus = document.createElement("div")
        cardReadStatus.textContent = `The book ${book.hasRead == true ? "has been" : "has not been"} finished`
        cardReadStatus.classList.add("card-read-status")
        card.appendChild(cardReadStatus)


        bookCardContainer.appendChild(card)
    }
}

function Book(title, author, pageCount, hasRead){
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.hasRead = hasRead
    this.info = function() {
        return (`${this.title} by ${this.author} ${this.pageCount} ${this.hasRead ? "Finished":"Not finished"}`)
    }
}
let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
let theFellowshipOfTheRing = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, true)
let philosophersStone = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 223, true)
addBookToLibrary(hobbit)
addBookToLibrary(theFellowshipOfTheRing)
addBookToLibrary(philosophersStone)
 
displayLibrary()