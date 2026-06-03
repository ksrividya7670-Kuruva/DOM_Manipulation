function gret(){
   let text= document.getElementById("search").value.toLowerCase();
   document.getElementById("heading").innerHTML=`Hello, ${text}`;
}
const box1=document.getElementById("box1");
const box2=document.getElementById("box2");
const box3=document.getElementById("box3");
const box4=document.getElementById("box4");
box1.onclick=()=>{
    box1.style.backgroundColor="red";
}
box2.onclick=()=>{
    box2.style.backgroundColor="blue";
}
box3.onclick=()=>{
    box3.style.backgroundColor="green";
}
box4.onclick=()=>{
    box4.style.backgroundColor="yellow";
}