console.log("Video 38");
const new_names = ["Nam", "Phuoc", "Thuan", "Trung"];
console.log("Index = " + new_names[0]);
new_names[2] = "Nguyen";

console.log("Before", new_names);
//Ham them vao cuoi mang
new_names.push(true, 123);
//Ham them vao dau mang
//new_names.unshift(null);

//Ham xoa phan tu o cuoi
new_names.pop();

//Ham xoa phan tu dau mang
new_names.shift();
console.log("After: ", new_names);