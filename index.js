// document.getElementById("hello").innerHTML="something"
//something is changed in java script
function dropDown() {
  const result = document.getElementById("subDrop").style.display;
 if(result===""){
    document.getElementById("subDrop").style.display = "block";
 }else if(result==="none"){
    document.getElementById("subDrop").style.display = "block";
 }
 else{
    document.getElementById("subDrop").style.display = "none";
 }
 
}
