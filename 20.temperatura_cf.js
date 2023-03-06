/*Q20.lista1 - Leia uma temperatura em °C, calcule e 
escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)*/
import * as readsync from 'readline-sync'

//Entrada
const temp_c = Number(readsync.question('Informe uma temperatura em graus Celsius: '))

//Processamento
const temp_f = ((9 * temp_c + 160) / 5)

//Saída
console.log('\n>>> A temperatura de', temp_c.toFixed(1) + 'ºC', 'equivale a', temp_f.toFixed(1) + 'ºF.')