function handleClick() {
    var inputVal = document.getElementById('input').value;

    if (inputVal === "") {
        error();
    } else {
        addToList();
    }
}

var errDiv = false;
   
function error() {
        if (errDiv === true) {
            return;
        } else createError();

}

function createError() {
    var errContainer = document.getElementById('error-div');
    var errorNote = document.createElement('p');
    errContainer.classList.add('text-danger');
    errContainer.classList.add('text-center');
    var errText = document.createTextNode("You need to write something");
    errorNote.appendChild(errText);
    errContainer.appendChild(errText);
    errDiv = true;
}

function divChecker() {
    var errContainer = document.getElementById('error-div');

    if (errContainer) {
        errContainer.remove();
        errDiv = false;
    }
}

function addToList() {

    divChecker();

    var inputVal = document.getElementById('input').value;

    var listContainer = document.getElementById('listContainer');
 
    var itemsContainer = document.createElement('div');
    itemsContainer.classList.add('row');
    itemsContainer.classList.add('border-bottom');
    itemsContainer.classList.add('m-auto');
    itemsContainer.classList.add('item-container');
 
    var textContainer = document.createElement('div');
    textContainer.classList.add('col-7');
 
    var textList = document.createElement("p");
    textList.classList.add('m-auto');
    textList.classList.add('p-3');
 
    var text = document.createTextNode(inputVal);
 
    textList.appendChild(text);
 
    textContainer.appendChild(textList);
 
    itemsContainer.appendChild(textContainer);
 
    var btnContainer = document.createElement('div');
    btnContainer.classList.add('col-5');
    btnContainer.classList.add('my-auto');
 
    var editBtn = document.createElement('button');
    editBtn.classList.add('btn');
    editBtn.classList.add('btn-secondary');
    editBtn.classList.add('alert-secondary');
 
    var editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid');
    editIcon.classList.add('fa-pen-to-square');
 
    editBtn.appendChild(editIcon);
 
    btnContainer.appendChild(editBtn);
 
    var doneBtn = document.createElement('button');
    doneBtn.classList.add('btn');
    doneBtn.classList.add('btn-success');
    doneBtn.classList.add('alert-success');
 
    var doneIcon = document.createElement('i');
    doneIcon.classList.add('fa-solid');
    doneIcon.classList.add('fa-check');   
 
    doneBtn.appendChild(doneIcon);
 
    btnContainer.appendChild(doneBtn);
 
    var dltBtn = document.createElement('button');
    dltBtn.classList.add('btn');
    dltBtn.classList.add('btn-danger');
    dltBtn.classList.add('alert-danger');
 
    var dltIcon = document.createElement('i');
    dltIcon.classList.add('fa-solid');
    dltIcon.classList.add('fa-xmark');
 
    
 
    dltBtn.appendChild(dltIcon);
 
    btnContainer.appendChild(dltBtn);
 
    itemsContainer.appendChild(btnContainer);
 
    listContainer.appendChild(itemsContainer);

    console.log(errDiv);
 
};


function deleteItem() {
    var listContainer = document.getElementById('item-container')
}