/*BIZZ BUZZ

imprimir os numeros de 1 - 100

multiplos de 5 -> Bizz
multiplos de 7 -> Buzz
multiplos de 5 e 7 -> BizzBuzz

1 2 3 4 Bizz 6 Buzz 8 9 Bizz ... 34 BizzBuzz ... 100
 
 */
function bizzBuzz(){
  let i = 1
  while(i <= 100){
    if (i % 5 == 0 && i % 7 == 0){
      console.log('BizzBuzz')
    } else if (i % 5 == 0){
      console.log('Bizz')
    } else if (i % 7 == 0){
      console.log('Buzz')
    } else {
      console.log(i)
    }
    i++;
  }
}
bizzBuzz();
