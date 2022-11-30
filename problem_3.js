
var aa=document.getElementById("a");
var bb=document.getElementById("b");
var cc=document.getElementById("c");
var btn=document.getElementById("btn");
var h1=document.getElementById("x1");
var h2=document.getElementById("x2");
var error=document.getElementById("error");

btn.addEventListener("click",function(){

    var a=parseInt(aa.value);
    var b=parseInt(bb.value);
    var c=parseInt(cc.value);
    var d=Math.pow(b,2)-(4*a*c)

    if(d >0){
        var r1=-b + Math.sqrt(d)/(2*a);
        var r2=-b - Math.sqrt(d)/(2*a);

        h1.innerHTML=r1;
        h2.innerHTML=r2;
       
    }else if(d==0){
        var r1=-b /(2*a);
        var r2=-b /(2*a);

        h1.innerHTML=r1;
        h2.innerHTML=r2;
        
    }else{
        error.innerHTML="root are imaginary"
    }
    

})

