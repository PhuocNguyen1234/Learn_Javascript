console.log("Video 27");
const score = 5;
switch(true){
    case (score >= 8 && score <=10): //Tra ve True
        console.log("Gioi");
        break;
    case (score >= 6 && score < 8):
        console.log("Kha");
        break;
    case (score >= 4 && score < 6):
        console.log("Trung binh");
        break;
    default:
        console.log("Yeu");
}