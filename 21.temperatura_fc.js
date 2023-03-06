/*Q20.lista1 - Leia uma temperatura em °F, calcule e 
escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).*/
import * as readsync from 'readline-sync'

//Entrada
const temp_f = Number(readsync.question('Informe uma temperatura em graus Fahrenheit: '))

//Processamento
const temp_c = ((5 * temp_f - 160) / 9)

//Saída
console.log('\n>>> A temperatura de', temp_f.toFixed(1) + 'ºF', 'equivale a', temp_c.toFixed(1) + 'ºC.')