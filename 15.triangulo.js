/*Q15.lista1 - Leia o valor da base e altura de um triângulo, 
calcule e escreva sua área. (área=(base * altura))/2*/

import * as readsync from 'readline-sync'

//Entrada
const base = Number(readsync.question('Informe o valor da base de um triângulo: '))
const altura = Number(readsync.question('Informe o valor da altura de um triângulo: '))

//Processamento
const area = (base * altura) / 2

//Saída
console.log('\n>>> A área do triângulo é', area + '.')