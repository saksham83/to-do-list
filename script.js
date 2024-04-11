function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;
    
    if (taskText.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    
    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    
    taskInput.value = "";
  }
  