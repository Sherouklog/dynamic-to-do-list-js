document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Trim and validate input if called directly
        if (save) {
            taskText = taskText.trim();
            if (taskText === '') {
                alert('Please enter a task');
                return;
            }
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
            // Remove from DOM
            taskList.removeChild(listItem);

            // Remove from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        // Append remove button to list item
        listItem.appendChild(removeButton);

        // Add list item to task list
        taskList.appendChild(listItem);

        // Save to Local Storage if not loading from storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear input field if called directly
        if (save) {
            taskInput.value = '';
        }
    }

    // Event listener for add button click
    addButton.addEventListener('click', () => addTask(taskInput.value));

    // Event listener for enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load existing tasks on page load
    loadTasks();
});