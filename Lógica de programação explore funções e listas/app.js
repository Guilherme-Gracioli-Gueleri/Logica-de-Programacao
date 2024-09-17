let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto!');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() { // criando uma função para a palavra "verificarChute"
    let chute = document.querySelector('input').value; // criando uma variável chamada "chute" e nela está sendo armazenada o valor inserido pelo usuário no campo de texto feito lá no HTML
    
    if (chute == numeroSecreto) {  //Se chute for igual ao numeroSecreto fazer as instruções abaixo
        exibirTextoNaTela('h1', 'Acertou!'); 
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // operador ternário para caso a pessoa acerte de primeira aparecer TENTATIVA e não TENTATIVAS

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; // variável criada para armazenar a frase com quantas tentativas foram feitas.
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é MENOR!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é MAIOR!');
        }
        tentativas++; 
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}