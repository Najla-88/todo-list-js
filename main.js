let task = document.querySelectorAll("li");

function addNewTask() {
    let input = document.getElementById("inputTask").value;
    if (input !== '') {
        let taskItem = document.createElement('li');
        taskItem.innerHTML = input;
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        taskItem.appendChild(span);

        document.getElementById("tasks").appendChild(taskItem);
        document.getElementById("inputTask").value = "";
        task = document.querySelectorAll("li")


        for (let i = 0; i < task.length; i++) {
            task[i].children[0].addEventListener("click", function() {
                this.parentElement.remove();
            })
        }
    }
}


document.getElementById("addBTN").addEventListener("click", addNewTask);
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addNewTask();
    }
})

for (let i = 0; i < task.length; i++) {
    task[i].children[0].addEventListener("click", function() {
        this.parentElement.remove();
    })
}


// for (let i = 0; i < task.length; i++) {
//     task[i].addEventListener("click", function() {
//         if (this.classList.contains("done")) {
//             this.classList.remove('done');
//         } else
//             this.classList.add("done");
//     }, false)
// }


// task.addEventListener("click", function() {
//     if (this.classList.contains("done")) {
//         this.classList.remove('done');
//     } else
//         this.classList.add("done");
// }, false)

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);