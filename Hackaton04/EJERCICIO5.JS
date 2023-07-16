
function contarVocales(texto){

    let contadorVocales = 0;
    let vocales= ['a' , 'e' , 'i', 'o', 'u','A','E', 'I','O','U'];

    for(let i=0 ; i <texto.length;i++){
        if(vocales.indexOf(texto[i]) >=0){
            ++contadorVocales;

        }

    }
    return contadorVocales;
}



console.log(contarVocales('JavaScript'));  //3
console.log(contarVocales('Perl'));         //1
console.log(contarVocales('MICROSOFT'));        //3
console.log(contarVocales('APPLE'));        //2
console.log(contarVocales('ECLIPSE'));      //3
console.log(contarVocales('Python')); //1