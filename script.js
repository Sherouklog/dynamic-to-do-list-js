document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Trim and validate input
        const taskText = taskInput.value.trim();
        
        // Check if task is not empty
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        
        // Add remove functionality
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Append remove button to list item
        listItem.appendChild(removeButton);

        // Add list item to task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }

    // Event listener for add button click
    addButton.addEventListener('click', addTask);

    // Event listener for enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});