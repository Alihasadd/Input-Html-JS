function addNote() {
    const inputValue = document.getElementById("noteInput") // 1.grab value of the add note input - push method
    // 2.Making sure the input is not empty or just spacebar- required
                                     
    if (input.value.trim() === ""){
        alert("Please enter a note");
        return; 
    } //trim method removes white space from input
    // 3.Create a new note element - grab the ul 
    const noteList = document.getElementById("node-list"); 
    const noteListChildrenCount = document.querySelectorAll(".note-list li").length;
    const noteItem = document.getElementById("li"); // 4.Grab the list
    

    const button = document.createElement("button");
    p.innerText = input.value;

    button.innerText = "Remove"
    button.onclick = removeNote;
    button.id = removeNote;
    button.classList.add("remove")
                //Another solution for const button is:
                // noteItem.innerHTML = `<p>${input.value}</p><button class="remove" onclick="removeNote()">Remove</button>`

    noteItem.appendChild 

}

function removeNote() {
    console.log("remove note function")
} 


