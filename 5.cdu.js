/*Q5.lista1 - Leia um número inteiro (3 dígitos), calcule e 
escreva a soma de seus elementos (C + D + U).*/

import * as readsync from 'readline-sync'

// entrada
const numero = Number(readsync.question('Informe um número inteiro de 3 dígitos: '))

// processamento 
const centena = Math.floor(numero / 100) 
const resto = numero % 100

const dezena = Math.floor(resto / 10)
const unidade = resto % 10

const soma = centena + dezena + unidade

// saída
console.log('Soma:', soma)
