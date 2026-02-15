console.log("Video 64");

const doSomeThing = () => {
    const a = 10;
    const b = 1;
    if(b===0){
        throw new Error("Thuc hien chia cho 0");
    }
    return a / b;
}


try {
    doSomeThing();
} catch (error) {
    console.log("Co loi xay ra", error);
} finally {
    console.log("Run final");
}
