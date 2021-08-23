/*DESAFIO 01
Reajuste salarial
As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%
Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento."*/

console.log("Boa tarde, você irá receber um reajuste salarial de acordo com as diretrizes da empresa @.com");

let salario = +prompt("Informe o Salario Atual:");
let nome = prompt("Qual o nome do colaborador");
let percentual = 0;
let aumento = 0;
let reajuste = 0;

if (salario <= 280) {
  percentual = 20;
} else if (salario <= 700){
  percentual = 15;
}else if (salario <= 1500){
  percentual = 10;
} else {
  percentual = 5;
}

percentual = (percentual) / 100;
aumento = (percentual)*(salario);
reajuste = (salario) + (aumento);

console.log (`Salario original: R$ ${salario}`);
console.log (`Percentual: R$ ${percentual * 100}% `);
console.log (`Aumento: R$ ${aumento}`);
console.log (`Reajuste: R$ ${reajuste}`);

console.log (`Sendo assim a partir do presente momento o salario de ${nome}, passou a ser o valor de: R$ ${reajuste}.`)


