/*Q10.lista1 - Leia 2 números inteiros, calcule e escreva o quociente 
e o resto da divisão do 1º pelo 2º.*/

import * as readsync from 'readline-sync'

//Entrada 
const num1 = Number(readsync.question('Digite o 1º número inteiro: '))
const num2 = Number(readsync.question('Digite o 2º número inteiro: '))

//Processamento
const quociente = Math.floor(num1 / num2)
const resto = num1 % num2

//Saída
console.log('\nO quociente da divisão de', num1, 'e', num2, 'é:', quociente, 'e o resto é', resto + '.')