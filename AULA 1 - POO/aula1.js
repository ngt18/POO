const prompt = require('prompt-sync')();

// Modelo de atributos e funções para criação de um objeto
class Cliente {
    // # -> PRIVA O DADO!!!!
    #nome; //Atributo o
    idade;
    cpf;
    agencia;

    // Retorna uma string com os dados/atributos
    getDescricao(){
        return "Nome: "+ this.#nome + ", Idade: "+ this.idade;
    }
    
    //Obtem nome
    get_nome() {
        return this.#nome;
    }

    // Preenche nome
    setNome(value) {
        this.#nome = value;
    }
}
// Objeto que possui as infomações da classe de forma individual
let cliente = new Cliente();

cliente.setNome(prompt("Digite o nome do cliente: "));
cliente.idade = 21;
cliente.cpf = '145.226.139-38';
cliente.agencia = 212129;

console.log(cliente);
console.log(cliente.getDescricao());
