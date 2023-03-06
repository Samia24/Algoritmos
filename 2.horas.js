/*Q2.lista1 - Leia um valor em horas e um valor em minutos, calcule e 
escreva o equivalente em minutos.*/
import * as readsync from 'readline-sync'

//Entrada

const horas = Number(readsync.question('Informe a(s) hora(s): '))
const minutos = Number(readsync.question('Informe os minutos: '))

//Processamento
const h = horas * 60
const min = minutos + h

//Saída
console.log('\n>>>', horas + 'h' + minutos + 'min', 'equivalem à', min, 'min.')