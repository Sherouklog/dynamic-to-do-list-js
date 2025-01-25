document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            // Recreate each task as specified
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            
            removeButton.onclick = () => {
                taskList.removeChild(listItem);
                
                // Update Local Storage
                const updatedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
                    .filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            };

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
        });
    }

    // Function to add a new task
    function addTask() {
        // Trim the input value
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
            
            // Update Local Storage
            const updatedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
                .filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        // Append remove button to list item
        listItem.appendChild(removeButton);

        // Append list item to task list
        taskList.appendChild(listItem);

        // Save to Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));

        // Clear the task input field
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

    // Load existing tasks on page load
    loadTasks();
});