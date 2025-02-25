const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){  // update the data on closing and reopening of the browser
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){  // update the data on refreshing the page
    localStorage.setItem("notes", notesContainer.innerHTML);
}



// on clicking the create notes button the new input area will add or show in the page

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");  // creating <p> element
    let img = document.createElement("img");  // creating <img> element 
    inputBox.className = "input-box";  // giving input-box (<p> tag) className
    inputBox.setAttribute("contenteditable","true");  // setting attribute
    img.src = "delete.png";  // giving source to image by .src attribute
    notesContainer.appendChild(inputBox).appendChild(img);  // appending the elements
})


// delete the input-box on clicking on the the delete.png img inside the input box

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})


//  on pressing the enter the default will not work instead it will show one line break, means cursor goes to next line

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})