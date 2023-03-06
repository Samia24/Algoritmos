/*Q23.lista1 - Leia um valor em kg (quilograma), calcule e 
escreva o equivalente em g (grama).*/

import * as readsync from 'readline-sync'

//Entrada
const kg = Number(readsync.question('Informe um valor em quilogramas: '))

//Processamento
const g = kg * 1000

//Saída
console.log('\n>>> '+ kg.toFixed(1) + ' quilograma(s)', 'equivale a', g.toFixed(1) + 'gramas.')