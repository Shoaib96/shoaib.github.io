var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
// var table = document.querySelector("table");

function inputLength() {
    return input.value.length;
}

function addItemList() {
    var li = document.createElement("li");
    // var tr = document.createElement("tr");
    // var td = document.createElement("td");
    var deleteButton = document.createElement("button");

    li.appendChild(document.createTextNode(input.value));
    // td.appendChild(document.createTextNode(input.value));
    // deleteButton.appendChild(document.createTextNode("Remove"));
    
    deleteButton.appendChild(document.createTextNode("Remove"));
    li.appendChild(deleteButton);
    
    // td.appendChild(deleteButton);
    
    ul.appendChild(li); 

    // table.appendChild(tr);
    input.value = "";
    deleteButton.classList.add("danger");

    li.classList.add("task");
    function taskDone() {
        li.classList.toggle("done");
    }    

    function taskRemove() {
        deleteButton.parentElement.remove();
    }
 
    li.addEventListener("click", taskDone);
    deleteButton.addEventListener("click", taskRemove);
    
}

function addItemAfterClick() {
    if(inputLength() > 0) {
        addItemList();
    }
}

function addItemAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        addItemList();
    }
}

button.addEventListener("click", addItemAfterClick);
input.addEventListener("keypress", addItemAfterKeypress);
