const noteBtn = document.getElementById('add-btn'),
  noteTitle = document.getElementById('note-title'),
  noteText = document.getElementById('note-text'),
  clear = document.querySelector('.clear');

function getNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }
}

//Note btn event listener

noteBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (noteTitle.value == "" || noteText.value == "") {
        return alert("Please add note title and details‼️");
    }

    getNotes() //notesObj array

    let myObj = {
        title: noteTitle.value,
        text: noteText.value,
    }
    notesObj.push(myObj)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    document.querySelector("form").reset();
    
})