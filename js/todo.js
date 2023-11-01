const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const wantToDeleteLi = event.target.parentElement;
    wantToDeleteLi.remove();
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(wantToDeleteLi.id));
    saveToDos();
}

function paintTodo(newTodo){
    const wantToAddAsLi = document.createElement("li");
    wantToAddAsLi.id = newTodo.id;

    const wantToAddAsSpan = document.createElement("span");
    wantToAddAsSpan.innerText= newTodo.text;

    const wantToAddAsButton = document.createElement("button");
    wantToAddAsButton.innerText= "❌";
    wantToAddAsButton.addEventListener("click", deleteTodo);

    wantToAddAsLi.appendChild(wantToAddAsSpan);
    wantToAddAsLi.appendChild(wantToAddAsButton);
    toDoList.appendChild(wantToAddAsLi);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);     
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);             
}
