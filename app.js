//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listener

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addToDo(event) {
  //prevent form from submitting
  event.preventDefault();

  //Creating Structure for Line-Items
  //Todo DIV & adding class to it
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");

  //LineItems LI // and Appending to DIV
  const newToDo = document.createElement("li");
  newToDo.innerText = todoInput.value;
  newToDo.classList.add("todo-item");
  toDoDiv.appendChild(newToDo);

  //Checked Button // and Appending to DIV
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completedButton);

  //Trash Button // and appending to DIV
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  toDoDiv.appendChild(trashButton);

  //Append to UL //Appending to UL
  todoList.appendChild(toDoDiv);

  //clearing value
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  //Delete To-DO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    //Below Step is done so that item can be removed from div
    //After successful transition is done
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //Checked
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
