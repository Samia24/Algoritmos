/*Q11.lista1 - Leia um número inteiro (3 dígitos) e escreva 
o inverso do número. (Ex.: número = 532 ; inverso = 235)*/

import * as readsync from 'readline-sync'

//Entrada
const num = Number(readsync.question('Informe um número inteiro de 3 dígitos: '))

//Processamento
const centena = Math.floor(num / 100) 
const resto = num % 100 

const dezena = Math.floor(resto / 10)
const unidade = resto % 10

//Saída
console.log('\n>>> O número digitado pelo usuário é', num + ',', 'e o seu inverso é', unidade,dezena,centena + '.')

