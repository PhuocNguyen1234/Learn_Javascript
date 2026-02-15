console.log("Video 55");

const btnSubmit = document.getElementById("btnSubmit");
const inputName = document.getElementById("inputName");
const prevName = document.getElementById("premessage");
const prevData = localStorage.getItem("data");

if(prevData) {
    prevName.innerHTML = `<b>${prevData}</b>`;
}
btnSubmit.addEventListener('click', () => {
    console.log(inputName.value);
    localStorage.setItem("data", inputName.value);
    document.getElementById("message").innerHTML = `<b>${inputName.value}</b>`
})