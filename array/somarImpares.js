/*
Cria uma função que recebe como argumento um array de números e retorna a soma dos números ímpares presentes. */

function somarImpares(numeros){
  let soma = 0;
  let i = 0
  while (i < numeros.length){
    if (numeros[i] % 2 == 1){
      soma += numeros[i]
      //numImpar = numeros[i] // valor da lista
      //soma += numImpar  
    }
    i++;
  }
  console.log(soma)
}

somarImpares([1, 5, 7, 13, 44]);
somarImpares([4, 5 , 8, 13, 45, 96]);