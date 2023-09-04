let task = document.querySelectorAll("li");

function addNewTask() {
    let input = document.getElementById("inputTask").value;
    if (input !== '') {
        let taskItem = document.createElement('li');
        let taskText = document.createElement('p');
        taskText.innerHTML = input

        taskItem.appendChild(taskText);

        var editSpan = document.createElement("SPAN");
        var icon = document.createTextNode("🖋️");
        editSpan.className = "edit";
        editSpan.appendChild(icon);

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);

        taskItem.appendChild(editSpan);
        taskItem.appendChild(span);

        document.getElementById("tasks").appendChild(taskItem);
        document.getElementById("inputTask").value = "";
        task = document.querySelectorAll("li")

        for (let i = 0; i < task.length; i++) {
            task[i].children[1].addEventListener("click", function() {
                var newValue = prompt("Edit task : " + this.parentElement.children[0].innerHTML)
                console.log(newValue)
                if (newValue !=='') {
                    this.parentElement.children[0].innerHTML = newValue;
                    document.querySelector(".edited").style.display = 'block'

                    setTimeout(function() {
                        document.querySelector(".edited").style.display = 'none'

                    }, 1000)
                }
                else{
                   
                    document.querySelector(".error").style.display = 'block'
                    setTimeout(function() {
                        document.querySelector(".error").style.display = 'none'

                    }, 1000)
                }
            })
        }

        for (let i = 0; i < task.length; i++) {
            task[i].children[2].addEventListener("click", function() {
                if (confirm("Are you sure you want to delete task ?")) {
                    this.parentElement.remove();
                    document.querySelector(".delete").style.display = 'block'

                    setTimeout(function() {
                        document.querySelector(".delete").style.display = 'none'

                    }, 1000)
                }
            })
        }

        document.querySelector(".add").style.display = 'block'

        setTimeout(function() {
            document.querySelector(".add").style.display = 'none'

        }, 1000)

    }
}


document.getElementById("addBTN").addEventListener("click", addNewTask);
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addNewTask();
    }
})

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);