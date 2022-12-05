/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


document.getElementById("somaGameHoras").addEventListener("click", HorasGame);
document.getElementById("Termos").addEventListener("click", alertaTermos)
document.getElementById("Termos2").addEventListener("click", alertaTermos)
function alertaTermos(){
    alert("Não tem nada aq, volte mais tarde")
}

function HorasGame(){
    let Game =  document.getElementById("GameDataList").value;
    let Horas = document.getElementById("inputHours").value;
    if(Game=="Pong"){
        Game=3
    }
    else if(Game=="Jogo da Cobra"){
        Game=6
    }
    else if(Game =="Dino Game"){
        Game = 4

    }
    let resultado = Game*Horas
alert(`Vai dar R$${resultado}`)
}

document.getElementById("btnLogin").addEventListener("click",Logar);

function Logar(){
alert("Bem Vindo, e boa jogatina")
document.getElementById("loginContainer").style.display = "none";
document.getElementById("esconder").style.display = "block";
}