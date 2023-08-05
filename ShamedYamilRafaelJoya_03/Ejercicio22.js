//Hacer un algoritmo en Pseint para calcular la suma d e los n primeros numeros.



function SumaNumero(numero){
 
    let resultado=0;

    for(const i=1; i<numero; i++){

        resultado = resultado+1;
    }

    return resultado;
}

const result=SumaNumero(5);

console.log(result);


//console.log({
  //  suma:result,
    //factorial: valor,

//});