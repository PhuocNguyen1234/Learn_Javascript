console.log("Video 43");

const person = {
    name: "Huu Phuoc",
    age: 18,
    city: "Da Nang"
}
//Read data 1
console.log("Name: ", person.name);
console.log("Age: ", person["age"]);

console.log("Before: ", person);
console.log("==============");
//Set data
person.address = "Ong Ich Khiem";
person["Language"] = "Vietnamese";

delete person.name;
console.log("After: ", person)