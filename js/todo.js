const refs = {
    form: document.querySelector('#form'),
    taskInput: document.querySelector('#taskInput'),
    taskBtn: document.querySelector('#addTaskBtn'),
    taskList: document.querySelector('#taskList'),
}

const tasks =[];
let id = 0;

refs.form.addEventListener('submit', addTask);
refs.taskList.addEventListener('click', clickTask);

function addTask(e) {
    e.preventDefault();
    
    const f = e.target;
    const taskValue = f.elements.task.value.trim();

    if(!taskValue){
        alert('Empty field!')
        return;
    }
    refs.taskList.insertAdjacentHTML('beforeend', createTask(taskValue))
    refs.form.reset();

}

function clickTask(event) {
    if(event.target.classList.contains('task-item')){
        return;
    } else if(event.target.tagName === 'BUTTON'){
        const liEl = event.target.closest('li')
        const liId = Number(liEl.dataset.id);
        const indexToDelete = tasks.findIndex(task => task.id === liId);
        if(indexToDelete != -1){
            tasks.splice(indexToDelete, 1)
        }
        liEl.remove();
        console.log(tasks)
    } else {
        const liEl = event.target.closest('li')
        const span = event.target;
        const liId = Number(liEl.dataset.id);
        const currentTask = tasks.find(el => el.id === liId)
        currentTask.isDone = !currentTask.isDone;
        
        span.classList.toggle('line');
        console.log(tasks)
    }
}

function createTask(text){
    id += 1;
    const taskData = {
        text,
        id,
        isDone: false
    }

    tasks.push(taskData);

    return `<li class="task-item" data-id="${id}">
                <span>${text}</span>
                <button class="delete-btn" id="deleteBtn">Delete</button>
            </li>`
}