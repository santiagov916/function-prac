var list = document.getElementsByTagName('li');


var textInput = document.getElementById('myInput');
textInput.addEventListener("keypress", function(event) {

    if (event.key === 'Enter') {

        event.preventDefault();

        document.getElementById('myBtn').click();
    }
})

for (let i = 0; i < list.length; i++) {
    
    var span = document.createElement('SPAN');
    var text = document.createTextNode('x');

    span.classList.add('close');
    span.classList.add('mx-4')

    span.appendChild(text);

    list[i].appendChild(span);
};

var dltSpan = document.getElementsByClassName('close');

var i;

for (let i = 0; i < dltSpan.length; i++) {

    dltSpan[i].addEventListener('click', function() {
        this.parentElement.style.display = 'none';
    });
}


// handling adding an item



function newElement() {
    var inputVal = document.getElementById('myInput').value;
    var ul = document.getElementById('myUL');
    var li = document.createElement('li');
    li.classList.add('list-group-item');
    var liText = document.createTextNode(inputVal);

    
    if(inputVal === "") {
        alert('You need to type in something')
    } else {
        li.appendChild(liText);
        ul.appendChild(li);
    }
    
    document.getElementById('myInput').value = "";

    var span = document.createElement('SPAN');
    var text = document.createTextNode('x');
    span.className = 'close mx-4 position-absolute end-0';

    span.appendChild(text);
    console.log(span);
    li.appendChild(span);

    var dltSpan = document.getElementsByClassName('close');

    var i;

    for (let i = 0; i < dltSpan.length; i++) {

        dltSpan[i].addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    }

};
