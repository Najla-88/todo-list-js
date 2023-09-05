let task = document.querySelectorAll("li");

function addNewTask() {
    let input = document.getElementById("inputTask").value;
    if (input !== '') {
        // Create li element
        let taskItem = document.createElement('li');

        // Create p element to add text in it
        let taskText = document.createElement('p');
        taskText.innerHTML = input;
        taskItem.appendChild(taskText);

        // Create edit button
        var editSpan = document.createElement("SPAN");
        var icon = document.createTextNode("🖋️");
        editSpan.className = "edit";
        editSpan.appendChild(icon);
        taskItem.appendChild(editSpan);

        // Create delete button
        var deleteSpan = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        deleteSpan.className = "close";
        deleteSpan.appendChild(txt);
        taskItem.appendChild(deleteSpan);

        // Append the li element to ul
        document.getElementById("tasks").appendChild(taskItem);

        // Reset the input to null
        document.getElementById("inputTask").value = "";

        // Update the task variable values
        task = document.querySelectorAll("li");

        // Add event listeners to dynamically added tasks
        taskItem.querySelector('.edit').addEventListener("click", function() {
            var newValue = prompt("Edit task: " + this.parentElement.children[0].innerHTML);
            console.log(newValue);
            if (newValue !== null) {
                this.parentElement.children[0].innerHTML = newValue;
                showNotification(".edited");
            }
        });

        taskItem.querySelector('.close').addEventListener("click", function() {
            if (confirm("Are you sure you want to delete the task?")) {
                this.parentElement.remove();
                showNotification(".delete");
            }
        });

        showNotification(".add");
    }
}

// Function to show notifications
function showNotification(className) {
    document.querySelector(className).style.display = 'block';
    setTimeout(function() {
        document.querySelector(className).style.display = 'none';
    }, 1000);
}

// Add new item when pressing the Add button
document.getElementById("addBTN").addEventListener("click", addNewTask);

// Add new item when pressing the Enter key
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addNewTask();
    }
});

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);