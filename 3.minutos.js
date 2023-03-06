/*Q3.lista1 - Leia um valor em minutos, calcule e escreva 
o equivalente em horas e minutos.*/

import * as readsync from 'readline-sync'

//Entrada

const minutos = Number(readsync.question('Informe os minutos: '))

//Processamento
const horas = Math.floor(minutos / 60)
const resto = minutos % 60

//Saída
console.log('\n>>>', minutos + 'min', 'equivalem à', horas + 'h' + resto + 'min.')