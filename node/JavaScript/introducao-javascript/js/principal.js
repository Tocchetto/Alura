var titulo = document.querySelector(".titulo");
titulo.textContent = "testes";

var peso = document.querySelector("#primeiro-paciente .info-peso");
var altura = document.querySelector("#primeiro-paciente .info-altura");
var imc = document.querySelector("#primeiro-paciente .info-imc")

pesop1 = peso.textContent;
alturap1 = altura.textContent;

imc.textContent = pesop1/(alturap1*alturap1);

console.log(peso);

if(pesop1 <= 0 || pesop1 >= 1000){
    peso.textContent = "Peso Inválido!";
}

if(alturap1 <= 0 || alturap1 >= 5){
    altura.textContent = "Altura Inválida!";
}