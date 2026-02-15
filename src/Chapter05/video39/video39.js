console.log("Video 39");
const myClass = ["Nam", "Trung", "Nguyen", "Phuong", "Dung"];
console.log(myClass, myClass.length);

console.log("================");
for(let i = 1; i <= myClass.length; i++){
    console.log("i = ", i, " and value: ", myClass[i - 1]);
}
console.log("================");
//for-each
myClass.forEach(function(value, index){
    console.log("value = ", value, "index = ", index);
})

console.log("================");
myClass.forEach((value, index) =>{
     console.log("Value = ", value, "index: ", index);
});