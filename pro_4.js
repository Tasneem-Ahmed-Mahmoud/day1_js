var res=document.getElementById("result");
let n1=( prompt("enter  the first Number "))
// console.log(n1)
n1.length
var n=n1.slice(n1.length-1,n1.length)
// console.log(n)
let m1=( prompt("enter  the second Number"))
m=m1.slice(m1.length-1,m1.length)
 let result=parseInt(n)+parseInt(m);
// console.log(result)
res.innerHTML=result