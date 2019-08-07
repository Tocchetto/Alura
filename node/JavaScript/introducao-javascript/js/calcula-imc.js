var titulo = document.querySelector(".titulo");
// titulo.textContent = "testes";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    var peso = pacientes[i].querySelector(".info-peso");
    var altura = pacientes[i].querySelector(".info-altura");
    var imc = pacientes[i].querySelector(".info-imc");

    if(!validaPeso(peso.textContent) || !validaAltura(altura.textContent)){
        pacientes[i].classList.add("invalid-values");
    }else{
        imc.textContent = calculaImc(peso.textContent, altura.textContent);
    }

}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 400){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura*altura);

    return imc.toFixed(2);
}