

function sumarPosiciones(numeros){
    if(numeros instanceof Array){
        let suma = [0,0];
        for(let i=0; i < numeros.length; i++){
            if(i%2 == 0){
                suma[0] += numeros[i];
            }else{
                suma[1] += numeros[i];  
          }
     }
     return suma;
    }else{
        throw TypeError('El Argumento debe ser un arreglo.');

    }
    
}

try{
    console.log(sumarPosiciones([1,2,3,4,5,6]));
}catch(e){
    console.log(`Error:  ${e.message}`);
}