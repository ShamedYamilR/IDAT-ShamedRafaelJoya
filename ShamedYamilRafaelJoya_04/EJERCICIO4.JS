

 function encontrarElementoMasFrecuente(datos){
    
    if(!Array.isArray(datos)){
            throw TypeError("El argumento debe ser un arreglo");
    }

    let conteo = {};

    for(const e of datos){
        if(conteo [e]){
            conteo[e] +=1;
        }else{
            conteo[e]= 1;
        }

    }

    let mayorConteo=0;
    let dato;
    let llaves = Object.keys(conteo);

    for(let i=0; i< llaves.length; ++i ){
        if(conteo[llaves[i]] > mayorConteo){
            dato= llaves[i];
            mayorConteo = conteo[llaves[i]];
        }
    }
    return dato;

}

let datos = ['A', 'B', 'A', 'F','A','A','C','D'];
try{
    console.log(encontrarElementoMasFrecuente(datos));
}catch(e){
    console.log('Error: ${e.message)');
}