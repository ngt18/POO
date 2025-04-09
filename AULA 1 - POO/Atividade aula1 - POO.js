const prompt = require('prompt-sync')();

// Modelo de atributos e funções para criação de um objeto
class TelefoneCelular {
    #marca; //Atributo
    #modelo;
    #preco;
    #memoria;

    get_descricao() {
        return "Marca:"+ this.#marca + "\nModelo:" + this.#modelo + "\nPreco:" + this.#preco + "\nMemoria:" + this.#memoria
    }

    get_marca() {
        return this.#marca;
    }

    setMarca(value){
        this.#marca = value;
    }
    get_modelo() {
        return this.#modelo;
    }

    setModelo(value){
        this.#modelo = value;
    }
    get_preco() {
        return this.#preco;
    }

    setPreco(value){
        this.#preco = value;
    }
    
    get_memoria() {
        return this.#memoria;
    }

    setMemoria(value){
        this.#memoria = value;
    }
}
// Objeto que possui as infomações da classe de forma individual
let celular = new TelefoneCelular();

celular.setMarca(prompt("Digite a marca do celular: "));
celular.setModelo(prompt("Digite o modelo do celular: "));
celular.setPreco(prompt("Digite o preco do celular: "));
celular.setMemoria(prompt("Digite a memoria do celular: "));

console.log(celular.get_descricao());

