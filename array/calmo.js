function analiseGrafico(grafico) {
    function isCalm(value) {
      return value === "-";
    };
  
    let quantidadeAlteracoes = 0;
    let previousItem = "";
    for(let i = 0; i < grafico.length; i++){
        const item = grafico[i]
        if (isCalm(previousItem) && !isCalm(item)) {
            quantidadeAlteracoes++;
        }
        previousItem = item;
    }
  
      
    return Math.trunc((100 * quantidadeAlteracoes) / grafico.length);
  };
  
  const chart = ["-", "-", "~", "-", "-", "-", "-", "~", "~", "-", "-", "~", "~"];
  console.log("Probability is", analiseGrafico(chart), "%");
  