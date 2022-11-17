let text = document.querySelectorAll('.inputText');
let read = document.querySelectorAll('.readOnly')
let listed = document.querySelector('.listofText');
let addButtonScript = document.querySelector('.buttonAdd');
let sortButtonScript = document.querySelector('.sortButton');
let delList = document.getElementById('deleteButton');
let inputListFirst = document.getElementById('divof2Elem');
let downImage = document.querySelector('.sortButton');
let upImage = document.querySelector('.up');
let i = 0;
let k = 0;
let j = 0;

addButtonScript.addEventListener('click',(event)=>{
            i++;
            let createdDiv = document.createElement('div');
            let createdElement = document.createElement('div');
            let inputChild = document.createElement('input');
            inputChild.classList.add('inputText');
            createdElement.classList.add('input');
            createdElement.classList.add('readOnly');
            createdDiv.classList.add('newDiv');
            createdElement.innerHTML = `<button class="xpicButton"> <img src="images/xpic.svg" alt="xpic" class="xpic"></button>`;
            createdDiv.appendChild(inputChild);
            createdDiv.appendChild(createdElement);
            listed.appendChild(createdDiv);
            event.preventDefault();
            createdDiv.setAttribute("draggable", "true");
        delList.addEventListener('click', ()=>{
            function removeInput(event) {
                if(i>0 && k ==0){
                event.remove();
                i--;
                k++               }
            else if (text.innerText != ' '){
                text.innerText = ' '
            }                }
                removeInput(inputListFirst);                })

            function readOnl(){
                inputChild.addEventListener('keydown', (event) => {
                    if (event.keyCode === 13) {
                    inputChild.setAttribute("readonly", "true");
                    }                }                );           }

                    readOnl(createdElement);   

                    createdElement.addEventListener('click', () =>{
            function removeInput(event) {
                    if(i>0){
                    event.remove();
                    i--;
                    }           }
                    removeInput(createdDiv);
})}) ;

function readOnl(eventt){
    eventt.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
          eventt.setAttribute("readonly", "true");
        }
    }
    );
}
read.forEach((element) => {
    readOnl(element);
})

    sortButtonScript.addEventListener('click', (event)=>{
            j++;
            if(j%2==0)
            downImage.innerHTML= '<img src = "images/up.svg" alt = "up" class="up"></img>';
            else downImage.innerHTML= '<img src = "images/down.svg" alt = "down" class="down">'
    })

    new Sortable(document.querySelector('.listofText'),
{
    animation: 200
})