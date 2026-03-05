console.log("Bai tap thuc hanh 1");

const btnSave = document.getElementById("btnSave");
const txtTask = document.getElementById("txtTask");

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
if(btnSave){
    btnSave.addEventListener('click', () => {
    console.log(txtTask.value);
    const currentDataStr = localStorage.getItem("data");
    const toDo = {
        id: getRandomInt(1, 5000),
        task: txtTask.value
    }

    if(currentDataStr){
        const currentData = JSON.parse(currentDataStr);
        currentData.push(toDo);
        localStorage.setItem("data", JSON.stringify(currentData));
    }else{
        localStorage.setItem("data", JSON.stringify([toDo]));
    }

    window.location.href = "todo.html"
})
}

const generateToDoTable = () => {
    const todoListStr = localStorage.getItem("data");
    if(todoListStr){
        const todoList = JSON.parse(todoListStr);
        console.log(todoList);

        const tbody = document.querySelector("#todoList tbody");
        if(todoList && todoList.length){
            todoList.forEach((value, index) => {
                tbody.innerHTML += 
                        `<tr>
                            <td>${value.id}</td>
                            <td>${value.task}</td>
                            <td><button data-id=${value.id} class="btn-delete">Delete</button></td>
                        </tr>`
            })
        }
    }
}

generateToDoTable();

const deleteBtns = document.querySelectorAll(".btn-delete");

if(deleteBtns){
    deleteBtns.forEach((btn, index) => {
        console.log(btn);
        btn.addEventListener("click", () => {
            const data_id = btn.getAttribute("data-id");
            handleDeleteTodo(data_id);
        })
    })
}

const handleDeleteTodo = (id) => {
    const todoListStr = localStorage.getItem("data");
    if(todoListStr){
        const todoList = JSON.parse(todoListStr);
        const newTodo = todoList.filter((data, index) => data.id + "" !== id);
        localStorage.setItem("data", JSON.stringify(newTodo));
        window.location.reload();
    } 
}



