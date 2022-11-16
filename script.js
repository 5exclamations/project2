let text = document.querySelector('.inputText');
let listed = document.querySelector('.listofText')
let addButtonScript = document.querySelector('.buttonAdd');
let xpicButtonScript = document.querySelector('.xpicButton');
let sortButtonScript = document.querySelector('.sortButton');
addButtonScript.addEventListener('click',(event)=>{
    var createdElement = document.createElement('p');
    createdElement.innerText = text.Value;
    listed.appendChild(createdElement);
    event.preventDefault();
})  

