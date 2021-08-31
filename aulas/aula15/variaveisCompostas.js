let num = [5, 8, 2, 9, 3] 
//Para acresentar mais variáveis:
num[5] = 6 //O nome da variável, entre conchetes o índice que é a posição do elemento novo.
// Útima posição:
num.push(7) // O número 7 será inserido na última posição.  
num.length // Conta a quantidade de elemento.
num.sort() // Ordena de forma crescente.
num.indexOf(8) // Função para encontrar um valor e retorna a posição no array. Se retornar -1 significa que não existe.

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
// ou 

console.log(num)
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
