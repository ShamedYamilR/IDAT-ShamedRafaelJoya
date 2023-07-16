

function SumarDigitos(n,suma){
    aviso = prompt("Ingrese numero");

    let suma=0;

    while(n<0){
        suma=suma + (n % 10);
        console.log(Math.trunc(n/10));
        }
    return suma;
}