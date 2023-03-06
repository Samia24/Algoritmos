/*Q16.lista1 - Leia o valor do lado de um quadrado, 
calcule e escreva sua área. (área = lado2)*/
import * as readsync from 'readline-sync'

//Entrada
const lado = Number(readsync.question('Informe o valor do lado de um quadrado: '))

//Processamento
const area = lado**2

//Saída
console.log('\n>>> A área do quadrado é', area + '.')