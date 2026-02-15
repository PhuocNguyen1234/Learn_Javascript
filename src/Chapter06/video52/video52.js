console.log("Video 52");
const myBtnElement = document.getElementById("myBtn");
const myTextElement = document.getElementById("myText");
const btnBackElement = document.getElementById("backBtn");

myBtnElement.addEventListener("click", () =>{
    console.log("You clicked your button");
    //myTextElement.innerText = "Xin chao moi nguoi";
    myTextElement.innerHTML = "<strong>Chao moi nguoi</strong>, <em>Hoc lap trinh voi HoidanIT</em>"
})

btnBackElement.addEventListener("click", () =>{
    myTextElement.innerText = "Video 52";
})
console.log(myBtnElement, myTextElement);