function getpara1(){
var input=[];
for (var i=1;i <=6;i++){
input.push(document.getElementById("box_"+i).value);
}
input.join(".")
document.getElementById("para1").innerHTML=input.join(".");
}

function getpara2(){
    var input=[];
    for (var j=1;j <=6;j++){
    input.push(document.getElementById("box2_"+j).value);
    }
    input.join(".")
    document.getElementById("para2").innerHTML=input.join(".");
    }


