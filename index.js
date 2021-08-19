//Elabore um programa que imprima na tela a seguinte fras Olá Mundo! Esse é o meu primeiro programa.

console.log("Olá Mundo! Esse é o meu primeiro programa");

//Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o Cep e telefone na terceira.

console.log("Nome: Ralf Fabricio Ribeiro Chaves");
console.log("Endereço: Rua Belo Horizonte, Pampulha, Belo Horizonte MG");
console.log("CEP:31.000-000, Tel: 319999-9999");

// Elabore um programa que recebe o nome de uma pessoa do terminal e mostra a seguinte mensagem: Olá{nome}! Seja bem vindo ao fantástico mundo da programação

let nome = prompt("Qual seu nome?");
console.log('Olá ' + nome + '! Seja bem vindo ao fantástico mundo da programção!');
//alert('Olá ' + nome + ', Seja bem vindo ao fantástico mundo da programção!');

//Elabore um programa que recebe dois valores inteiros e mostra a soma desses valores

let numero1 = +prompt("Por favor, insira um numero:");
let numero2 = +prompt("Por favor, insira outro numero:");
let total = (numero1 + numero2);
console.log('A soma desses numeros são ' + total +'!');
//alert('A soma desses numeros são ' + total +'!');

// Elabore um programa que receba 3 notas de um aluno e calcule a média dele.

let nota1 = +prompt("Qual a sua primeira nota?");
let nota2 = +prompt("Qual a sua segunda nota?");
let nota3 = +prompt("Qual a sua terceira nota?");
let geral = (nota1 + nota2 + nota3)/3;
console.log('A media das suas notas é ' + geral +'!');
//alert('A media das suas notas é ' + geral +'!');


/* Elabore um programa que recebe dois valores inteiros e mostra se o primeiro valor é maior ou igual segundo valor*/

let val1 = +prompt("Insira um numero:");
let val2 = +prompt("Insira outro numero:");
let resposta = val1 >= val2
console.log("Agora iremos descobrir se o primeiro numero que você digitou é maior ou igual ao segundo")
console.log(resposta) 


