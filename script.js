let text = document.querySelector('.inputText');
let listed = document.querySelector('.listofText')
let dellll = document.querySelector('.xpic')
let addButtonScript = document.querySelector('.buttonAdd');
let xpicButtonScript = document.querySelector('.xpicButton');
let sortButtonScript = document.querySelector('.sortButton');
addButtonScript.addEventListener('click',(event)=>{
    var createdElement = document.createElement('p');
    createdElement.classList.add('input');
    createdElement.setAttribute("dragable", "true")
    createdElement.innerHTML = `<input class="inputText" name="TextDraw" type = 'text'>
    <button class="xpicButton"> <img src="images/xpic.svg" alt="xpic" class="xpic"></button>
    `;
    listed.appendChild(createdElement);
    event.preventDefault();
    
}) ;
text.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      text.setAttribute("readonly", "readonly")
    }
}
);

xpicButtonScript.addEventListener('click',(event)=>{
    listed.removeChild(listed.firstChild);
})
const yay = document.querySelector('#yay');
removeAllChildNodes(yay);



const deleteButton = document.createElement('delete-element');
deleteButton.id = 'delete-element';

const deleteImage = document.createElement('im');
deleteImage.src = "images/xpic.svg";
deleteButton.appendChild(deleteImage);
listed.appendChild(deleteButton);

deleteButton.addEventListener('click', () => {
    const parent = deleteButton.parentElement;
    console.log('frwds');
    parent.parentElement.removeChild(parent);
})