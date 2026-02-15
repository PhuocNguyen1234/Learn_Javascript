console.log("Bai lab 04");

const inputUserName = document.getElementById("userName");
const inputPassWord = document.getElementById("passWord");
const btnDangNhap = document.getElementById("btnDangNhap");

btnDangNhap.addEventListener("click", () => {
    const userName = inputUserName.value;
    const passWord = inputPassWord.value;
    
    if(userName === "phuoc@gmail.com" && passWord === "123456"){
        alert("Dang nhap thanh cong");
        window.location.href = "success.html"
    }else{
        alert("Dang nhap that bai");
        inputUserName.style.borderColor = "red";
        inputPassWord.style.borderColor = "red";
    }
        
})