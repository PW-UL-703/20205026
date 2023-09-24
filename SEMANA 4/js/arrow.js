/*
Tradicional
*/

function sumarTradicional(){
    let op1 = document.getElementById("v1").value
    let op2 = document.getElementById("v2").value
    let rpta = parseInt(op1) + parseInt(op2)
    document.getElementById("resultado").innerHTML = rpta
}

/*
Arrow function
*/

let sumarArrow1 = () => {
    console.log("En sumarArrow 1")
    let op1 = document.getElementById("v1").value
    let op2 = document.getElementById("v2").value
    let rpta = parseInt(op1) + parseInt(op2)
    document.getElementById("resultado").innerHTML = rpta
}

let sumarOtraForma = (a, b) => a + b

function sumarArrow1(){
    array.forEach(element => {
        
    });
}

function sumarArrow2(){

}