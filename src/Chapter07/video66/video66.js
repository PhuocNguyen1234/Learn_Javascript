console.log("Video 66");

//Promise
 fetch("http://localhost:8000/users")
    .then(res => res.json())
    .then(data => console.log("fetch promise",data))

//async await

const fetchdata = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log("Asynce/await",data);
}

fetchdata();

