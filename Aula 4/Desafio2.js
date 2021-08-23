/*DESAFIO 02
Jogo da adivinhação
Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/
console.log("Tente advinhar meu número! Boa sorte!");
let ninteiro = +prompt("Escolha um número de 0 há 10");
let pensar = Math.random()*10

if (ninteiro == pensar) {
console.log("Você acertou");
} else {
console.log("Você errou!");
}