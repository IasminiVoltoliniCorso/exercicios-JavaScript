function catchTheMouse(catAndMouse) {
    let posicaoGato;
    let posicaoRato;
    let i = 0;
    while (i < catAndMouse.length) {
        if (catAndMouse[i] == 'Cat'){
            posicaoGato = i
        }else if (catAndMouse[i] == 'Mouse') {
            posicaoRato = i // indice da lista
        }
        i++;
    }
    if (posicaoRato - posicaoGato > 4){
        console.log('O rato esta SALVO')
    }else{
        console.log('O Gato PEGOU')
    }
}

catchTheMouse(['Cat', '.', 'Mouse']); //  "CAUGHT"
catchTheMouse(['.', 'Cat', '.', '.', '.', '.', 'Mouse']); //  "SAFE"
catchTheMouse(['.', '.', '.', 'Cat', '.', '.', 'Mouse']); // "CAUGHT"
