console.log("Working!")

let newTodo = document.getElementsByClassName("newTodo form-control")[0];
let submit = document.getElementsByClassName("submitButton")[0];
let clear = document.getElementsByClassName("clearButton btn-info")[0];
let markAll = document.getElementsByClassName("markAllButton btn-success")[0];
let deleteAll = document.getElementsByClassName("deleteButton btn-danger")[0];

submit.addEventListener("click", (event) => {
    event.preventDefault();

    let todoList = document.getElementById("list");

    let todo = newTodo.value;
    if (todo != "") {
        var node = document.createElement("li");
        node.className = "listItem";
        var text = document.createTextNode(todo);
        var input = document.createElement("input");
        input.type = "checkbox";
        input.className = "todolist-cb";
        node.appendChild(input);
        node.appendChild(text);
        todoList.appendChild(node);
        newTodo.value = "";   
    }
})

clear.addEventListener("click", (event) => {
    event.preventDefault();

    let todoList_cb = document.getElementsByClassName("todolist-cb");
    let len = todoList_cb.length
    for(var i = 0; i < len; i++) {
        todoList_cb[i].checked = false;
    }
})

markAll.addEventListener("click", (event) => {
    event.preventDefault();

    let todoList_cb = document.getElementsByClassName("todolist-cb");
    let len = todoList_cb.length
    for(var i = 0; i < len; i++) {
        todoList_cb[i].checked = true;
    }
})

deleteAll.addEventListener("click", (event) => {
    event.preventDefault();

    let todoList = document.getElementsByClassName("listItem");
    let len = todoList.length
    for(var i = 0; i < len; i++) {
        todoList[0].parentNode.removeChild(todoList[0]);
    }

})

