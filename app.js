// at loding time show all notes so call showNotes function at starting
showNotes();




// add note to localstorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function () {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) 
        notesobj = [];
    else 
        notesobj = JSON.parse(notes);
    notesobj.push(addTxt.value);
    addTxt.value = "";
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
});




// function to show notes from localstorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) 
        notesobj = [];
    else
        notesobj = JSON.parse(notes);
    let ans = "";
    notesobj.forEach(function (element, index) {
        ans +=  
        `<div class="noteCard my-2 mx-2 card" style="width:18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-outline-dark my-3">Delete Note</button>
            </div>
        </div>`
    });
    let notesEle = document.getElementById('notes');
    if (notesobj.length == 0) 
        notesEle.innerHTML = 'Nothing to show. use "Add Note" button to add notes';
    else 
        notesEle.innerHTML = ans;
}





// delete from localstorage
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) 
        notesobj = [];
    else 
        notesobj = JSON.parse(notes);
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}





//search from localstorage
let search = document.getElementById('searchBtn');
search.addEventListener("click", function () {
    let searchTxt = document.getElementById('searchTxt');
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(searchTxt.value)) 
            element.style.display = "block";
        else
            element.style.display = "none";
    });
    searchTxt.value="";
});

