let numeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAlatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}

function mensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto!');
exibirTextoNaTela('p', 'Digite um número de 1 a 10:');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou :)')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let numeroDeTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', numeroDeTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){exibirTextoNaTela('p', `O número é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número é maior que ${chute}`);
}
    limparCampo();
}
    tentativas++; 
    
}

function gerarNumeroAlatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteados = numeroSorteado.length;
    if (quantidadeDeNumerosSorteados == numeroLimite){
        numeroSorteado = [];
    }

    if (numeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAlatorio();
    } else {
        numeroSorteado.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
    
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAlatorio();
    mensagemInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
