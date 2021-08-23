/*Caixa eletrônico
Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.*/

console.log('Bem-vindo(a). \nQuantia máxima para Saque: R$ 600.00 \nQuantia mínima para Saque: R$ 10.00 \nDigite apenas valores inteiros.\n')

let saque = parseInt(prompt('Digite o valor que deseja sacar: R$ '))

let nota1, nota5, nota10, nota50, nota100

if (saque>9 && saque<601) {
  nota100 = Math.floor( saque / 100 )
  nota50 = Math.floor((saque - nota100*100)/50)
  nota10 = Math.floor((saque - nota100*100 - nota50*50)/10)
  nota5 = Math.floor((saque - nota100*100 - nota50*50 - nota10*10)/5)
  nota1 = Math.floor((saque - nota100*100 - nota50*50 - nota10*10 - nota5*5)/1)
  
  console.log(`Você sacou R$ ${saque.toFixed(2)}`)
  console.log(`${nota100}x Notas de 100`)
  console.log(`${nota50}x Notas de 50`)
  console.log(`${nota10}x Notas de 10`)
  console.log(`${nota5}x Notas de 5`)
  console.log(`${nota1}x Notas de 1`)} 
  
else {console.log('Você não pode sacar este valor. Reinicie o sistema e digite novamente lembrando o valor: \nMínimo para saque é: R$10 \nMáximo: R$600.')}