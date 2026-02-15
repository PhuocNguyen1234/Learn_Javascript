console.log("Bai lab 2");
const diemTB = (toan, van, anh) => {
    return (toan + van + anh) / 3;
}

// function xepLoai(diemTB){
//     if(diemTB >= 9){
//         console.log("Xuất sắc");
//     }else if(diemTB >= 8 && diemTB < 9){
//         console.log("Giỏi");
//     }else if(diemTB >= 6.5 && diemTB < 8){
//         console.log("Khá");
//     }else{
//         console.log("Trung bình");
//     }
// }

const xepLoai = (diemTB) =>{
     if(diemTB >= 9){
        return "Xuất sắc";
    }else if(diemTB >= 8 && diemTB < 9){
        return "Giỏi";
    }else if(diemTB >= 6.5 && diemTB < 8){
        return "Khá";
    }else{
        return "Trung bình";
    }
}
let score = diemTB(5, 6, 7);
console.log("My score is: " + score);
console.log("Xếp loại: " + xepLoai(score));