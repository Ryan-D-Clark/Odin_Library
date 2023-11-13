let displayForm = document.getElementById("displayForm")
let closeForm = document.getElementById("closeForm")
let bookForm = document.getElementById("bookForm")
let libraryContainer = document.getElementById("libraryContainer")
let author = document.getElementById("author")
let title = document.getElementById("title")
let pages = document.getElementById("pages")
displayForm.addEventListener("click", () => {
    bookForm.showModal()
})
closeForm.addEventListener("click", () =>{
    event.preventDefault()
    bookForm.close()
})
createBook.addEventListener("click", addBookToMyLibrary)
let myLibrary = [{bookAuthor:"Andrzej Sapkowski", bookTitle:"Sword of Destiny", bookPageCount:384, bookCompletedStatus:true}, {bookAuthor:"George R.R. Martin", bookTitle:"A Game Of Thrones",bookPageCount: 835, bookCompletedStatus:false}]
function Book(author, title, pageCount, completedStatus){
    this.bookAuthor = author;
    this.bookTitle = title;
    this.bookPageCount = pageCount;
    this.bookCompletedStatus = completedStatus
}
function addBookToMyLibrary(){
    event.preventDefault()
    let read = document.querySelector('input[name="read"]:checked').value;
    if(read == "yes"){
        read = true
    }
    else{
        read = false
    }
    let newBook = new Book(author.value, title.value, pages.value, read)
    myLibrary.push(newBook)
    bookForm.close()
    displayLibrary()
}
function displayLibrary(){
    libraryContainer.replaceChildren("")
    for(let i  = 0; i < myLibrary.length; i++){
        let div = document.createElement("div")
        div.setAttribute("data-id", i)
        div.classList.add("book")
        console.log(i)
        console.log(myLibrary[i])
        if(myLibrary[i]["bookCompletedStatus"]){
            div.classList.add("finished")
        }
        div.innerHTML =     `
        <div class="bookTitle">${myLibrary[i]["bookTitle"]}</div><div class="bookAuthor">${myLibrary[i]["bookAuthor"]}</div>
        <div class="bookPageCount">${myLibrary[i]["bookPageCount"]+ " pages"}</div>
        <div class="bookCompletedStatus">${myLibrary[i]["bookCompletedStatus"] ? "Finished":"Not finished"}</div>`
        libraryContainer.appendChild(div)
        let remove = document.createElement("i")
        remove.classList.add("fa-solid")
        remove.classList.add("fa-trash")
        remove.classList.add("remove")
        div.appendChild(remove)
        libraryContainer.appendChild(div)
        div.addEventListener("contextmenu", function(ev) {
            ev.preventDefault()
            if(myLibrary[i]["bookCompletedStatus"] == true){
                myLibrary[i]["bookCompletedStatus"] = false
                div.classList.remove("finished")
                div.children[3].innerHTML = "Not finished"
            }
            else{
                myLibrary[i]["bookCompletedStatus"] = true
                div.classList.add("finished")
                div.children[3].innerHTML = "Finished"
            }
            console.log(myLibrary[i]["bookCompletedStatus"])
        })
        remove.addEventListener("click", () =>{
            libraryContainer.children[i].style.display = "none"
            if(myLibrary.length > 1){
                myLibrary.splice(i,1)    
            }
            else{
                myLibrary.pop()
            }
        })
}}
