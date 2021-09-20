// Somar todos os números menores, e todos os maiores.

function miniMaxSum(arr) {
    let maior = arr[0]
    let menor = arr[0]
    let soma = 0
    let somaMenor = arr[0]
    let somaMaior = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < menor){
            menor = arr[i]
        }else if (arr[i] > maior){
            maior = arr[i]
        }
        soma += arr[i]
    }
    somaMenor = soma - maior
    somaMaior = soma - menor
    
    console.log(`Soma dos menores ${somaMenor}`);
    console.log(`Soma dos maiores ${somaMaior}`);
}

miniMaxSum([1, 2, 3, 4, 5, 6]);
