let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo= document.querySelector(tag);
    campo.innerHTML = texto;
    falarTextoNavegador(texto);
 }
exibirMensagemInicial();
/*
function falarTexto(texto){
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
*/
 
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
            frase = "O número secreto é maior";
            exibirTextoNaTela('p', frase);
        }else{
            frase = "O número secreto é menor";
            exibirTextoNaTela('p', frase);
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
    exibirTextoNaTela('p', 'Para jogar, escolha um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }
 //segundo leitor de tela
 function falarTextoNavegador(texto){
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
 }
 function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativas = 1;
    document.getElementById('chutar').removeAttribute('disabled');
 }