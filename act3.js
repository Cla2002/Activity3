document.getElementById("form-2").style.display="none";


function proceed() {
    let input1 = document.getElementById("nnInput").value;
    let value1 = `Hey! ${input1}, what's your order?`; 

    document.getElementById("form-1").style.display="none";
    document.getElementById("valueh1").innerHTML=value1;
    document.getElementById("form-2").style.display="block";
}

function proceed2(){
    document.getElementById("form-2").style.display="none"; 
    document.getElementById("form-3").style.display="block"; 
}
function proceed3(){
    document.getElementById("form-1").style.display="none";
    document.getElementById("form-2").style.display="none"; 
    document.getElementById("form-4").style.display="block"; 
}
function proceed4(){
    document.getElementById("form-1").style.display="none";
    document.getElementById("form-2").style.display="none"; 
    document.getElementById("form-5").style.display="block"; 
}
function proceed5(){
    document.getElementById("form-1").style.display="none";
    document.getElementById("form-2").style.display="none"; 
    document.getElementById("form-6").style.display="block"; 
}
function back1(){
    document.getElementById("form-1").style.display="none";
    document.getElementById("form-2").style.display="block"; 
    document.getElementById("form-3").style.display="none"; 
    document.getElementById("form-4").style.display="none"; 
    document.getElementById("form-5").style.display="none"; 
    document.getElementById("form-6").style.display="none"; 
}
function back2(){
    document.getElementById("form-1").style.display="none";
    document.getElementById("form-2").style.display="block"; 
    document.getElementById("form-3").style.display="none"; 
    document.getElementById("form-4").style.display="none"; 
    document.getElementById("form-5").style.display="none"; 
    document.getElementById("form-6").style.display="none"; 
}
function back3(){
    document.getElementById("form-1").style.display="none";
    document.getElementById("form-2").style.display="block"; 
    document.getElementById("form-3").style.display="none"; 
    document.getElementById("form-4").style.display="none"; 
    document.getElementById("form-5").style.display="none"; 
    document.getElementById("form-6").style.display="none"; 
}
function back4(){
    document.getElementById("form-1").style.display="none";
    document.getElementById("form-2").style.display="block"; 
    document.getElementById("form-3").style.display="none"; 
    document.getElementById("form-4").style.display="none"; 
    document.getElementById("form-5").style.display="none"; 
    document.getElementById("form-6").style.display="none"; 
}