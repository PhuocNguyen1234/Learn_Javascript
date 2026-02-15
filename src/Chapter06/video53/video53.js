console.log("Video 53");
const btnChangeColor = document.getElementById("btnChangeColor");
const btnBack = document.getElementById("btnBack");
const textH1 = document.getElementById("textH1");

btnChangeColor.addEventListener("click", () => {
    console.log("Click me");
    textH1.style.backgroundColor = "red";
    textH1.style.color = "blue";
    textH1.classList.add("huuPhuoc", "david");
})

btnBack.addEventListener("click", () => {
    console.log("Click me");
    textH1.style.color = "black";
    textH1.style.backgroundColor = "Unset";
    textH1.classList.remove("huuPhuoc", "david");
})


console.log(btnChangeColor, btnBack, textH1);