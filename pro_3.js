
var _name=document.getElementById("name")
var _year=document.getElementById("year")
var _age=document.getElementById("age")


var name_=prompt("enter your name ");
while(!typeof(name_)=="string") {
  prompt("enter your name ")
}
 _name.innerHTML="Name : "+ name_
 


 var year=prompt("enter your bd year ");
while(!isFinite(year)  && isNaN(year)){
  prompt("enter your bd year ")
}

_year.innerHTML="Year is: "+year;
 var age=2022 - parseInt(year)

 _age.innerHTML="Age is : "+age;



