// basic function for handling a click
function handleClick() {
    // grabs the input 
    var inputVal = document.getElementById('input').value;

    // if statement to check for an input to add to the TODO list, if none, run the error() function
    if (inputVal === "") {
        error();
    } else {
        addToList();
    }
}

// this variable is set at false and changes when there is an erro message present, toggling true and false
var errDiv = false;
   
// this function checks if the errDiv is true or false to easily manipulate the DOM's error message
function error() {
        if (errDiv === true) {
            return;
        } else createError();

}

// this function will create an error message if there is nothing typed into the input val
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

// function that checks if the error span for an invalid input is there, if so remove it and change errDiv = false;
function divChecker() {
    var errContainer = document.getElementById('error-div');

    if (errContainer) {
        errContainer.remove();
        errDiv = false;
    }
}

// this function is the base function for creating all essential items needed to create a new TO DO item.
function addToList() {    
    // check if the error div is present
    divChecker();

    // get the input val
    var inputVal = document.getElementById('input').value;

    // get the ul element
    var listContainer = document.getElementById('ul');

    // create a new li element with text
    var listItem = document.createElement('li');
    listItem.classList.add('text-center')
    listTextVal = document.createTextNode(inputVal);
    listItem.appendChild(listTextVal);

    // span for the button section
    var btnSpan = document.createElement('span');
    btnSpan.classList.add('d-flex')
    btnSpan.classList.add('justify-content-center');
    btnSpan.classList.add('p-2');

    // create new delete button with attribute + classes
    var dltItem = document.createElement('button');
    dltItem.setAttribute('type', 'button');
    dltItem.classList.add('btn');
    dltItem.classList.add('btn-danger');
    dltItem.classList.add('alert-danger');

    // create a new icon for the dlt button
    var dltIcon = document.createElement('i');
    dltIcon.classList.add('fa-solid');
    dltIcon.classList.add('fa-xmark');
    dltIcon.setAttribute('id', 'dlt');

    // append dlt icon to dlt button , append dlt button to the btn span parent element
    dltItem.appendChild(dltIcon);
    btnSpan.appendChild(dltItem);
    listItem.appendChild(btnSpan);

    // future version wills will include a done btn and an edit task btn
    var doneBtn = document.createElement('button');
    doneBtn.classList.add('btn');
    doneBtn.classList.add('btn-success');
    doneBtn.classList.add('alert-success');
 
    var doneIcon = document.createElement('i');
    doneIcon.classList.add('fa-solid');
    doneIcon.classList.add('fa-check');   

    var editBtn = document.createElement('button');
    editBtn.classList.add('btn');
    editBtn.classList.add('btn-secondary');
    editBtn.classList.add('alert-secondary');
    
    var editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid');
    editIcon.classList.add('fa-pen-to-square');
    
    editBtn.appendChild(editIcon);

    doneBtn.appendChild(doneIcon);

    // connect final list to the ul element    
    listContainer.appendChild(listItem);
};