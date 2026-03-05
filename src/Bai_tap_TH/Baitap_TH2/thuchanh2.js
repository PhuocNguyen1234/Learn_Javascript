console.log("Bai tap thuc hanh 2");

const fetchData = async () => {
    const res = await fetch ("http://localhost:8000/blogs");
    const data = await res.json();

    //Insert data to html
    const tbody = document.querySelector("#myTable tbody");
    if(data && data.length){
        data.forEach((value, index) => {
            tbody.innerHTML += 
                `<tr>
                    <td>${value.id}</td>
                    <td>${value.title}</td>
                    <td>${value.author}</td>
                    <td>${value.content}</td>
                    <td>
                        <button class="delete-blog" data-id="${value.id}">Delete</button>
                    </td>
                </tr>`
        })
    }
}

const addNewRowToEnd = (value) => {
    const tableBody = document.querySelector("#myTable tbody");

    //Tạo phần tử dòng mới
    const newRow = document.createElement("tr");
    //Gán HTML cho dòng
    newRow.innerHTML = 
        `<tr>
            <td>${value.id}</td>
            <td>${value.title}</td>
            <td>${value.author}</td>
            <td>${value.content}</td>
            <td>
                <button class="delete-blog" data-id="${value.id}">Delete</button>
            </td>
        </tr>`
    
    //Thêm dòng vào cuối bảng
    tableBody.appendChild(newRow);
    const btn = document.querySelector(`[data-id="${value.id}"]`)
    btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        //call api to delete a new blog
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await rawResponse.json();
        console.log(data);
        //delete html row
        const row = btn.closest('tr');
        row.remove();
    })
    
}

const handleAddNewwBlog = () => {
    const title = document.getElementById("txtTitle");
    const author = document.getElementById("txtAuthor");
    const content = document.getElementById("txtContent");
    const saveBtn = document.getElementById("btnSaveBlog");

    saveBtn.addEventListener("click", async () => {
        console.log(title.value, author.value, content.value);

        //call api to create a new blog
        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value, author: author.value, content: content.value
            })
        });
        const data = await rawResponse.json();
        addNewRowToEnd(data);

        console.log("Phan hoi API create: ", data);
    })
}

const handleDeleteBtns = () => {
    const btns = document.querySelectorAll(".delete-blog");
    if(btns){
        btns.forEach((btn, index) =>{
            btn.addEventListener("click", async () => {
                const id = btn.getAttribute("data-id");
                //call api to delete a new blog
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                const data = await rawResponse.json();
                console.log(data);
                //delete html row
                const row = btn.closest('tr');
                row.remove();
            })
        })
    }
}

fetchData().then(() => {
    handleDeleteBtns();
});
handleAddNewwBlog();
