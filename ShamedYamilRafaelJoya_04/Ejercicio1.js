var a = 1;
var b = 1;
var arreglo = [];
var count   = 2

const numerofinal = 35;
const suma = (a,b) =>{
    return a+b;
   }

arreglo[0]=a;
arreglo[1]=b;

while (b < numerofinal) {

    var c=b;
    b=suma(a,b);
    a=c;
    
    arreglo[count]=b;
    count++;
  }

  console.log(arreglo);
