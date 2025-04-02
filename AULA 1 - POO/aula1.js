const prompt = require('prompt-sync')();

// Modelo de atributos e funções para criação de um objeto
class Cliente {
    #nome; //Atributo
    idade;
    cpf;
    agencia;

    get_nome() {
        return this.#nome;
    }

    setNome(value){
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

