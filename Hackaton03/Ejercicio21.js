function funcionFactorial(numero){
    if(numero){
        return 1
    }else{
        return numero * funcionFactorial(numero-1);
    }
    
    }
    
    const valor= funcionFactorial(5)
    
   console.log(valor);