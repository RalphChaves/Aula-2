/* Faça um programa que pergunte ao usuário um número e valide se é par ou ímpar*/
// Crie uma variável para receber o valor, com conversão para int
// Para um número ser par, a divisão dele por 2 tem que dar resto 0

n1 = parseInt(prompt('Digite um numero: '));
let res = '';
if (n1 % 2 === 0){
 console.log(`Você digitou o numero ${n1} e esse numero é: PAR!`);
} else if (n1 % 2 === 1){
  console.log(`Você digitou o numero ${n1} e esse numero é: ÍMPAR!`);
} else {
  console.log('Você digitou uma opção invalida! Tente novamente!')
};