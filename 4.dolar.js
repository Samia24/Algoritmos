/*Q4.lista1 - Leia o valor do dólar e um valor em dólar, calcule e 
escreva o equivalente em real (R$).*/
import * as readsync from 'readline-sync'

//Entrada
const dolar = Number(readsync.question('Informe o valor do dólar em reais: '))
const valor = Number(readsync.question('Informe um valor em dólar: '))

//Processamento
const reais = dolar * valor

//Saída
console.log('>>> O valor do dólar é de R$' + dolar.toFixed(2), ', portanto o valor de', valor.toFixed(2), 'dólares corresponde a R$' + reais.toFixed(2) + '.')
