const taskList = document.querySelector('.task-list__ul');
const addBtn = document.querySelector('.wrapper__btn');
const input = document.querySelector('.wrapper__input');
const checkbox = document.querySelector('.checkbox');

let taskArr = JSON.parse(localStorage.getItem("task")) || [];

//Функции
function createElements() {
    let listElem = document.createElement('li');
    listElem.textContent = input.value;
    listElem.classList.add('listElem')
    taskList.appendChild(listElem);
    
    taskArr.push(listElem.textContent);

    localStorage.setItem('task', JSON.stringify(taskArr))
}
function createElementsFromArr() {
    for (let i = 0; i < taskArr.length; i++) {
        let listElem = document.createElement('li');
        listElem.textContent = taskArr[i];
        listElem.classList.add('listElem')
        taskList.appendChild(listElem);
    }
}

//События
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        //проверка на ввод
        if (input.value.trim() === "") {
            alert('Введите задачу');
        } else {
            createElements()
        }
        
        
    } 
}); 
addBtn.addEventListener('click', (event) => {
    //проверка на ввод
    if (input.value.trim() === "") {
        alert('Введите задачу');
    } else {
        createElements()
    }
})

/* const checkbox = document.querySelector('.checkbox');
checkbox.addEventListener('click', () => {
    console.log(checkbox.checked);
}) */


//Dom 
document.addEventListener('DOMContentLoaded', () => { 
    createElementsFromArr();
})