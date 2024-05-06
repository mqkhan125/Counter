const Count = document.querySelector("#count");
const Sub = document.querySelector("#sub");
const Add = document.querySelector("#add");
const Reset = document.querySelector("#reset");

let counter = 0 ;

Sub.addEventListener('click',() => {
    counter--;
    Count.innerHTML = counter;
})

add.addEventListener('click',() => {
    counter++;
    Count.innerHTML = counter;
})

reset.addEventListener('click', () => {
    counter = 0;
    Count.innerHTML = counter;
})