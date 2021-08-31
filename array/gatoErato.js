// CAT AND MOUSE
// John has a mischievous cat that loves to catch mice.
// Once it spots a mouse, John’s cat can jump up to four steps, in order to catch it. 
// The cat and mouse positions, as well as the number of steps between them are represented in an array.
// Write a function that takes an array as argument and prints “CAUGHT” in case there are less than four steps between the cat and the mouse, or “SAFE”.


function catchTheMouse(catAndMouse) {
    let posicaoGato;
    let posicaoRato;
    for (let i = 0; i < catAndMouse.length; i++) {
      
      if (catAndMouse[i] == 'Cat'){
        posicaoGato = i
        
      } else if (catAndMouse[i] == 'Mouse'){
        posicaoRato = i
      }
      
    }
     //console.log("posicaoGato", posicaoGato)   // 1
     //console.log("posicaoRato", posicaoRato)   // 8
    if (posicaoRato - posicaoGato < 4){
      console.log('CAUGHT')
    } else {
      console.log('SAFE')
    }
     
 }
 
 
 // EXAMPLES
 catchTheMouse(['Cat', '.', 'Mouse']); // the function should print "CAUGHT"
 catchTheMouse(['.', 'Cat', '.', '.', '.', '.', 'Mouse']); // the function should print "SAFE"
 catchTheMouse(['.', '.', '.', 'Cat', '.', '.', 'Mouse']); // the function should print "CAUGHT"
 
 
 /*
 for (let i = 0; i < 3; i++) {
   console.log(i)
 }
 
 
 let i = 0;
 while(i < 3) {
   i++; 
   console.log(i)
*/
