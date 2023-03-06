/*Q8.lista1 - Leia 2 números, calcule e escreva a divisão da soma 
pela subtração dos números lidos.*/

import * as readsync from 'readline-sync'

//Entrada
const num1 = Number(readsync.question('Digite o 1º número: '))
const num2 = Number(readsync.question('Digite o 2º número: '))

//Processamento
const soma = num1 + num2
const sub = num1 - num2
const div = soma / sub

//Saída
console.log('\n>>> A divisão da soma', soma, 'pela subtração', sub, 'é:', div + '.')
