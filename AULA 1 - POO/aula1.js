const prompt = require('prompt-sync')();

class Cliente {
    nome;
    idade;
    cpf;
    agencia;
}

let cliente = new Cliente();

cliente.nome = prompt("Digite o nome do cliente: ");
cliente.idade = 21;
cliente.cpf = '145.226.139-38';
cliente.agencia = 212129;

console.log(cliente);

