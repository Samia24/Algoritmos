/*Q9.lista - Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).*/
import * as readsync from 'readline-sync'

//Entrada
const num1 = Number(readsync.question('Digite o 1º número: '))
const num2 = Number(readsync.question('Digite o 2º número: '))

//Saída
console.log('\n>>> Os números (' + num1 + ',' + num2 + ') em ordem inversa é (' + num2 + ',' + num1 + ').')