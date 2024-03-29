function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    var list = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.innerText = taskText; 
    
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        list.removeChild(listItem);
    };

    var completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.onclick = function(){
        listItem.classList.toggle("completed");
    };

    listItem.appendChild(deleteButton);
    listItem.appendChild(completeButton);

    list.appendChild(listItem);

    input.value = "";
    
}