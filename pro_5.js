var dis=document.getElementById("dis");
var min=document.getElementById("min");
var btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    var m =parseInt(dis.value)*2 ;
    min.innerHTML=m +" minuts";
})


