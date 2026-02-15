console.log("Video 40");

const score = [10, 8, 4, 9, 3, 5];

//Read data
score.forEach((value, index)=>{
    console.log( "Index = ", index, "Điem ", value);
})
console.log(score);

//Modify data
console.log("==============")
const score2 = score.map((value, index) => {
    return value * 2;
});

const otherScore2 = score.map((value, index) => value * 2);

console.log(score2);
console.log(otherScore2);