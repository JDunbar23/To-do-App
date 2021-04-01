
// set the variables
const input = document.querySelector('#add');
const button = document.querySelector('#btn');
const list = document.querySelector('#list');
const items = document.getElementsByTagName('li');


// add element on button click
button.addEventListener('click',() => {

    const text = input.value; // set what is inputted in the text variable

    if(text == ""){ // if nothing was entered
        alert("You must enter something");
    } else{

        const li = document.createElement('li'); // create a new li
        li.innerHTML = text;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
});



// if you click on a task listed in the app
list.onclick = function(ev){

    if(ev.target.tagName == 'LI'){ // if you click on a list item
         ev.target.classList.toggle('checked'); // set the checked class on the list item
    }
};