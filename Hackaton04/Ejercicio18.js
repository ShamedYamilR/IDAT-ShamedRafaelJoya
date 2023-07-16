var cadena1 = 'Abcdefghijklmnñopqrstuvwxy';
var cadena2 = 'Abcdefghijklmnñopqrstuvwxy';

const sonanagrama = (cadena1,cadena2) => {

	// Convertir a minúsculas
	cadena1 = cadena1.toLowerCase();
    cadena2 = cadena2.toLowerCase();

    let alfabetoComoArreglo = Array.from(cadena1);
	// Recorrer alfabeto
	for (let indice = 0; indice < alfabetoComoArreglo.length; indice++) {
		let letraActual = alfabetoComoArreglo[indice];
		// En caso de que la cadena NO contenga la letra, regresamos false de una vez
		if (!cadena2.includes(letraActual)) return false;
	}
	// Se termina el ciclo y no se rompió arriba, ¡así que la cadena es pangrama!
	return true;
};

console.log(sonanagrama(cadena1,cadena2));
