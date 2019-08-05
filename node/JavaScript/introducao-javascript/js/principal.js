var titulo = document.querySelector(".titulo");
titulo.textContent = "testes";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    var peso = pacientes[i].querySelector(".info-peso");
    var altura = pacientes[i].querySelector(".info-altura");
    var imc = pacientes[i].querySelector(".info-imc");
    
    var validadePeso = true;
    var validadeAltura = true;

    if(peso.textContent <= 0 || peso.textContent >= 1000){
        validadePeso = false;
        imc.textContent = "Peso inválido!"
    }
    
    if(altura.textContent <= 0 || altura.textContent >= 5){
        validadeAltura = false;
        imc.textContent = "Altura inválida!";
    }

    if(validadePeso == false || validadeAltura == false){
        pacientes[i].classList.add("invalid-values");
    }else{
        imc.textContent = (peso.textContent / (altura.textContent*altura.textContent)).toFixed(2);
    }
    
}
