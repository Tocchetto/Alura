class validaCodigo {
    
    constructor(texto){
        if(!this._valida(texto)) throw new Error(`O texto ${texto} não é válido!`);
        this._texto = texto;
    }
    
    _valida(texto){
        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }

    get texto(){
        return this._texto;
    }
}

let codigo1 = new validaCodigo('GWZ-JJ-12'); // válido
console.log(codigo1.texto);
let codigo2 = new validaCodigo('XXx-JJ-12'); // inválido
console.log(codigo2.texto);