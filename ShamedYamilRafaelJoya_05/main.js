
class vehiculo{
    constructor(ruedas, tipo){
        this.ruedas=ruedas;
        this.tipo=tipo;
    }

    todosAtributos(){
return{
    ruedas: this.ruedas,
    tipo: this.tipo,    
        };
    }

    get dameRuedas(){
        return this.ruedas;
    }

    set ActualizarRuedas(cantidad){
        return this.ruedas=cantidad;
    }

}


const auto= new vehiculo(4, 'Auto');

console.log(auto);

