let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo= document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
 }
exibirMensagemInicial();
 
 function verificarChute(){
    let chute = document.querySelector('input').value;
    let frase;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        frase = `Você acertou o número secreto é: ${numeroSecreto}, Você Chutou: ${chute}, com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', frase);
        exibirTextoNaTela('h1', 'Parabéns! ');
        document.getElementById('chutar').setAttribute('disabled', true);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //frase = 'Você errou o número secreto é: '+ numeroSecreto + ', Você Chutou: '+ chute;

        tentativas ++;
        limparCampo();
        //exibirTextoNaTela('h1', frase);
        if(chute < numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é maior');
        }else{
            exibirTextoNaTela('p', 'O número secreto é menor ');
        }
    }


 }
 function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
 }
 function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* 10 + 1);
    if(listaDeNumerosSorteados.length == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
 }
 function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto por Rafael Vieira dos Santos');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10 Grupo Scape Room');
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }
 function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativas = 1;
    document.getElementById('chutar').removeAttribute('disabled');
 }