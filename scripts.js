const newTask = document.getElementById('new-task');
const panel = document.getElementById('task-creation');
const close = document.getElementById('close-creation');
const colors = document.querySelectorAll('#colors span')

const addTask = document.getElementById('add-task');
const taskBody = document.getElementById('task-body');

const title = document.getElementById('creation-title');
const description = document.getElementById('creation-description');
const day = document.getElementById('creation-day');
const month = document.getElementById('creation-month');
const year = document.getElementById('creation-year');

let selectedColor = '#6167698a';
newTask.addEventListener('click', () => {
    panel.style.display = 'flex'
});
close.addEventListener('click', () => {
    panel.style.display = 'none'
});
colors.forEach(color => color.addEventListener('click', () => {
    selectedColor = `#${color.id}`;
    colors.forEach(c => c.style.outline = '');
    color.style.outline = '2px solid #aac93b';
}));

addTask.addEventListener('click', () => {
    const task = document.createElement('div');
    task.className = 'task';
    task.style.backgroundColor = selectedColor
    
    const label = document.createElement('label');

    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';

    const check = document.createElement('div');
    check.className = 'checkbox-action';
    
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';
    
    const taskTitle = document.createElement('h1');
    taskTitle.className = 'task-title';
    taskTitle.innerText = title.value || 'Title';
    
    const taskDescription = document.createElement('p');
    taskDescription.className = 'task-description';
    taskDescription.innerText = description.value || 'Description';
    
    const taskDate = document.createElement('span');
    taskDate.className = 'task-date';
    taskDate.innerText = `${day.value || 'DD'}/${month.value || 'MM'}/${year.value || 'AA'}`;
    
    const deleteTask = document.createElement('button')
    deleteTask.className = 'delete-task';
    deleteTask.innerText = 'delete'
    deleteTask.addEventListener('click', () => {
        task.remove()
    });

    label.appendChild(checkbox)
    label.appendChild(check)

    taskContent.appendChild(taskTitle);
    taskContent.appendChild(taskDescription);
    taskContent.appendChild(taskDate);
    task.appendChild(label)
    task.appendChild(taskContent)
    task.appendChild(deleteTask)
    taskBody.appendChild(task)
    
    panel.style.display = 'none'
});
