/*Q19.lista1 - Leia o valor do raio de uma esfera, calcule e 
escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)*/

import * as readsync from 'readline-sync'

//Entrada
const r = Number(readsync.question('Informe o valor do raio de uma esfera: '))

//Processamento
const volume = (4 * Math.PI * (r**3)) / 3

//Saída
console.log('\n>>> O volume de uma esfera é', volume.toFixed(2) + ',', 'quando seu raio é', r.toFixed(2) + '.')