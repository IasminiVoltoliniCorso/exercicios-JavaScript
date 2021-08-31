function catchTheMouse(catAndMouse) {
    let posicaoGato = catAndMouse.indexOf('Cat')
    let posicaoRato = catAndMouse.indexOf('Mouse')
      
    if (posicaoRato - posicaoGato > 4){
        console.log('O rato esta SALVO')
    }else{
        console.log('O Gato PEGOU')
    }
}

catchTheMouse(['Cat', '.', 'Mouse']); //  "CAUGHT"
catchTheMouse(['.', 'Cat', '.', '.', '.', '.', 'Mouse']); //  "SAFE"
catchTheMouse(['.', '.', '.', 'Cat', '.', '.', 'Mouse']); // "CAUGHT"
