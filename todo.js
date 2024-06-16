// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Add task
    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });

    // Complete or delete task
    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON' && event.target.classList.contains('delete-button')) {
            const listItem = event.target.parentElement;
            taskList.removeChild(listItem);
        } else if (event.target.tagName === 'SPAN') {
            event.target.parentElement.classList.toggle('completed');
        }
    });
});
