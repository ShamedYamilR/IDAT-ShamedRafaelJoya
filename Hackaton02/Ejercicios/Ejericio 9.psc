Algoritmo Aumento_sueldo
	Imprimir "Ingrese el sueldo que recibe el trabajador"
	Leer sueldo
	Si sueldo>2000 Entonces
		aumento=sueldo*5/100
	SiNo
		aumento=sueldo*10/100
	Fin Si
	sueldo= sueldo + aumento
	Imprimir "El aumento de este trabajador sería: ", aumento
	Imprimir  "Obteniendo un sueldo total de: ",sueldo
FinAlgoritmo
