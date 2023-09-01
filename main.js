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

    }

}

document.getElementById("addBTN").addEventListener("click", addNewTask)
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter")
        addNewTask();
})