//const numero=5;
//let resultado=1;

//funciones recursivas
function funcionFactorial(numero){
if(numero){
    return 1
}else{
    return numero * funcionFactorial(numero-1);
}

}

const valor= funcionFactorial(5)

console.log(valor);



//se puede hacer con for una funcion recursiva
//for(let i=1; i<numero; i++){

    
//    resultado= resultado*i;  //*=
//}

//console.log(resultado);

////funciones -- recursividad



function CrearUsuario(nombre, edad, estudiando){

        return{
                    user:{
                        nombre:"nombre",
                        edad:23,
                        carrera: "Administracion"                    },
                    messange: `Bienvenido ${nombre} a IDAT`,
                    accesstoken: "dashndfuasufasbfkasfasdasdasd",
                    refreshToken:""

        }

}


const nuevoUsuario= CrearUsuario("Shamed", 21, "Ingenieria");

console.log(nuevoUsuario);


//Objetos = guarda variables, en base a una variable general (variable con propiedades)

const variable={
    nombre: "Jose",
    edad:22,
    carrer:"Ciencias de la computacion",
}

console.log(variable,nombre);

const carro={
    color: "Jose Perez",
    marca:"Hyundai",
}

console.log(carro,color);


//console.log({
  //  suma:result,
    //factorial: valor,

//});