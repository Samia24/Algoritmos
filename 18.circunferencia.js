/*Q18.lista1 - Leia o valor do raio de uma circunferência, 
calcule e escreva seu comprimento.(c = 2 * p * r)*/

import * as readsync from 'readline-sync'

//Entrada
const r = Number(readsync.question('Informe o valor do raio de uma circunferência: '))

//Processamento
const c = 2 * Math.PI * r

//Saída
console.log('\n>>> O comprimento de uma circunferência é', c.toFixed(2) + ',', 'quando seu raio é', r.toFixed(2) + '.')