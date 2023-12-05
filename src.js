let num1,num2;

function Add(){
    num1=document.getElementById("NUM1").value;
    num2=document.getElementById("NUM2").value;
    console.log(document.getElementById("NUM2").value);
    if(num1==="" || num2===""){
        document.getElementById("ANS").style.color="#f00"
        document.getElementById("ANS").textContent='EMPTY INPUT';
        
    }
    else{
        document.getElementById("ANS").style.color="#0f0";
        document.getElementById("ANS").textContent=(Number(num1)+Number(num2));
    }
}
function Sub(){
    num1=document.getElementById("NUM1").value;
    num2=document.getElementById("NUM2").value;
    if(num1==="" || num2===""){
        document.getElementById("ANS").style.color="#f00"
        document.getElementById("ANS").textContent='EMPTY INPUT';
        
    }
    else{
        document.getElementById("ANS").style.color="#0f0";
        document.getElementById("ANS").textContent=(Number(num1)-Number(num2));
    }
}
function Mul(){
    num1=document.getElementById("NUM1").value;
    num2=document.getElementById("NUM2").value;
    if(num1==="" || num2===""){
        document.getElementById("ANS").style.color="#f00"
        document.getElementById("ANS").textContent='EMPTY INPUT';
        
    }
    else{
        document.getElementById("ANS").style.color="#0f0";
        document.getElementById("ANS").textContent=(Number(num1)*Number(num2));
    }
}
function Div(){
    num1=document.getElementById("NUM1").value;
    num2=document.getElementById("NUM2").value;
    if(num1==="" || num2===""){
        document.getElementById("ANS").style.color="#f00"
        document.getElementById("ANS").textContent='EMPTY INPUT';
        
    }
    else{
        document.getElementById("ANS").style.color="#0f0";
        document.getElementById("ANS").textContent=(Number(num1)/Number(num2));
    }
}
