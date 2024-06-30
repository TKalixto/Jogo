let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
console.log (numeroSecreto);
let tentativas = 0;
function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial();
function verificarChute() {
tentativas++;
let chute = document.querySelector('input').value;
if (chute == numeroSecreto){
exibirTextoNaTela('h1', 'Acertou');
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
exibirTextoNaTela('p',mensagemTentativas);
document.getElementById('reiniciar').removeAttribute('disabled');
tentativas ('');
}else{
if (chute > numeroSecreto){
  exibirTextoNaTela('h1 ', `Errou, tente outro número menor que: ${chute}`);
  exibirTextoNaTela('p','Número secreto é menor');
}else{
  exibirTextoNaTela('h1 ', `Errou, tente outro número maior que: ${chute}`);
  exibirTextoNaTela('p', 'O número secreto é maior');
}
console.log(tentativas);
}
limparCampo();
}
function gerarNumeroAleatorio() {
let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if(quantidadeDeElementosNaLista == numeroLimite){
   listaDeNumerosSorteados = [];
}
if(listaDeNumerosSorteados.includes(numeroEscolhido)){
return gerarNumeroAleatorio();
}else {
listaDeNumerosSorteados.push(numeroEscolhido);
console.log(listaDeNumerosSorteados);
return numeroEscolhido;
}
}
function limparCampo() {
chute = document.querySelector('input');
chute.value = '';
}
function reiniciarJogo() {
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 0;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true);
}

