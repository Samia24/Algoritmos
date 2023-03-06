/*Q6.lista1 - Leia uma velocidade em km/h, calcule e 
escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)*/

import * as readsync from 'readline-sync'

// Entrada
const velocidade_kmh = Number(readsync.question('Velocidade (km/h): '))

// Processamento
const velocidade_ms = velocidade_kmh / 3.6

// Saída
console.log(velocidade_kmh, 'km/h equivale a', velocidade_ms, 'm/s')