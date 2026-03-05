console.log("Bai lab 05");

const fetchData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log("Data: ", data);

    //Insert data to html
    const tBody = document.querySelector("#users tbody");
    if(data && data.length){
        data.forEach((value, index) => {
            tBody.innerHTML += 
                `<tr>
                    <td>${value.id}</td>
                    <td>${value.name}</td>
                    <td>${value.email}</td>
                </tr>`
        })
    }
}

fetchData();

