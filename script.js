// Wait for the DOM to fully load before executing any script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new list item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Attach an event listener to remove the task when the button is clicked
        removeButton.onclick = () => {
            taskList.removeChild(taskItem);
        };

        // Append the remove button to the list item, then add the item to the list
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    };

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Add task on button click

    // Add task on pressing the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
