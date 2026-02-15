console.log("Video 65");

const greeting = (name, callBack) => {
    console.log("Xin chao: ", name);
    callBack();
}

const hello = () => {
    console.log("Learn call back...");
}

const hi = () => {
    console.log("Say hi...");
}
greeting("Phuoc", hello);

greeting("Xin chao", hi);