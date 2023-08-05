var cadena = 'Abcdefghijklmnñopqrstuvwxy';

const esPangrama = cadena => {
	const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxy";
	// Convertir a minúsculas
	cadena = cadena.toLowerCase();

	let alfabetoComoArreglo = Array.from(ALFABETO_MINUSCULAS);

	// Recorrer alfabeto
	for (let indice = 0; indice < alfabetoComoArreglo.length; indice++) {
		let letraActual = alfabetoComoArreglo[indice];
		// En caso de que la cadena NO contenga la letra, regresamos false de una vez
		if (!cadena.includes(letraActual)) return false;
	}
	// Se termina el ciclo y no se rompió arriba, ¡así que la cadena es pangrama!
	return true;
};

console.log(esPangrama(cadena));
