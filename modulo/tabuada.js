/****************************************************************************
 * Objetivo: Arquivo destinado ao processamento do calculo de uma tabuada
 * Autor: Dwovanna Santos
 * Data: 09/02/2023
 * Versão: 1.0
****************************************************************************/

// Retorna o processamento de uma taboada qualquer até um cantador qualquer
const calcularTabuada = function(multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',', '.'));
    let maxContador = Number(String(maxMultiplicador).replace(',', '.'));
    let status = true;
    let cont = 0; //start 
    let resultado;

    if(tabuada == 0 || maxContador == 0)
    status = false;
    else if(isNaN(tabuada) || isNaN(maxContador))
    status = false;
    else{
        //2x0=0
       // while(cont <= maxContador){

           // resultado = tabuada * cont;
         //   console.log(tabuada + 'x' + cont + '=' + resultado)

             //cont = cont + 1;
            //cont++;
            //cont +=1;

    //}

    for(let cont = 0; cont <= maxContador; cont++){
        resultado = tabuada * cont;
        console.log(tabuada + 'x' + cont + '=' + resultado);

    }

}
  return status;
};

calcularTabuada(2, 20);

//deixar público
module.exports = {
    calcularTabuada
}