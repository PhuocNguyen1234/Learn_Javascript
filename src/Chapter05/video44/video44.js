console.log("Video 44");

sv1 = {
    name: "Phuoc",
    age: 19,
    scores: 9
}

sv2 = {
    name: "Trung",
    age: 20,
    scores: 8
}

sv3 = {
    name: "Loc",
    age: 17,
    scores: 10
}

const sinhVien = [sv1, sv2, sv3];
console.log("Check sinh vien: ", sinhVien);

sinhVien.forEach((item, index) => {
    console.log("STT: ", index, "Name: ", item.name);
})

// for(let key in sv1){
//     console.log(key, sv1[key]);
// }

//for...of: chi lay gia tri
// for(let value of Object.values(sv1)){
//     console.log(value);
// }

for(let [key, value] of Object.entries(sv1)){
    console.log(value);
}