// Cria uma função que recebe como argumento um array de números e retorna a suma dos números pares presentes. 


function sumEvenNumbers(numbers) {
  // Your code here

  const reducer = (accumulador, currentValue) => {
    if (currentValue % 2 === 0) {
      // queres fazer algo
      return accumulador + currentValue 
    } else {
      // queres fazer algo2
      return accumulador
    }
  }
  return numbers.reduce(reducer, 0); // replace this
}
const randomNumbers = [1, 2, 4];
console.log(sumEvenNumbers(randomNumbers))