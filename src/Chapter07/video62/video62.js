console.log("Video 62");

//async
console.log("1");

const myPromise = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            console.log("2 with promise");
            //return de ket thuc trang thai
            resolve("Huu Phuoc");
        }, 2*1000)
    })
}

console.log("3");

console.log("===============with promise below");
console.log("1");
const test = myPromise();
console.log("test", test);
myPromise().then(data => {
    console.log("data: ", data);
    console.log("3");
})