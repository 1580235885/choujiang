var arr=[0,0,0,0,0,0,0,0,0,1]; //1代表中奖0代表未中奖
var num=0;
function random() {
    num++;
    if(num>=10) {
        console.log(1);
        num=0
    }else {
        console.log(arr[Math.floor(Math.random()*10)])
    }
}
