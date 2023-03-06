/*Q14.lista1 - Leia 3 notas de um aluno e o peso de cada nota, 
calcule e escreva a média ponderada.*/

import * as readsync from 'readline-sync'

//Entrada
const nota1 = Number(readsync.question('Informe a 1ª nota: '))
const nota2 = Number(readsync.question('Informe a 2ª nota: '))
const nota3 = Number(readsync.question('Informe a 3ª nota: '))

const peso1 = Number(readsync.question('Informe o peso da 1ª nota: '))
const peso2 = Number(readsync.question('Informe o peso da 2ª nota: '))
const peso3 = Number(readsync.question('Informe o peso da 3ª nota: '))

//Processamento
const media = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

//Saída
console.log('\n>>> A média ponderada das notas é', media.toFixed(1) + '.')