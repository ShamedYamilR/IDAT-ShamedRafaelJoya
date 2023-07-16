function convertirBinarioADecimal(binario){
    if(binario.constructor != tring){
        return null;
    }

    binario = binario.replace(/[^01]/gi, '');

    return Number.parseInt(binario, 2);
}

console.log(convertirBinarioADecimal('1001'));
console.log(convertirBinarioADecimal('1111'));
console.log(convertirBinarioADecimal('10000'));
console.log(convertirBinarioADecimal('111111'));

conloge.log();

console.log(convertirBinarioADecimal(1001));