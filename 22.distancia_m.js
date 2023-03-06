/*Q22.lista1 - Leia um valor em km, calcule e escreva o equivalente em m.*/
import * as readsync from 'readline-sync'

//Entrada
const km = Number(readsync.question('Informe um valor em quilômetros: '))

//Processamento
const m = km * 1000

//Saída
console.log('\n>>> '+ km.toFixed(1) + ' quilômetro(s)', 'equivale a', m.toFixed(1) + 'metros.')