console.log("Video 32");
const sum = (a, b, c) => {
    console.log("Run before");
    if(typeof a !== "number"){
        console.log("run empty return");
        return 0;
    }
    console.log("Run after")
    return a + b+ c;
};
console.log(sum("Xin chao", 6, 8));