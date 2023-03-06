/*Q13.lista1 - Leia um valor em real (R$), calcule e escreva 70% deste valor.*/
import * as readsync from 'readline-sync'

// Entrada
const valor = Number(readsync.question('Informe um valor R$: '))


// Processamento
const percentual = (valor/100) * 70

// Saída
console.log('O valor correpondente a 70% de R$' + valor.toFixed(2), 'é de R$' + percentual.toFixed(2))