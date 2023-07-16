Proceso  CalcularFactorial
	
	Escribir "Ingrese un número:"
	Leer numero
	factorial = 1
	
	Si numero >= 0 Entonces
		Para i = 1 Hasta numero Hacer
			factorial = factorial * i
		FinPara
		
		Escribir "El factorial de ", numero, " es:", factorial
	Sino
		Escribir "No se puede calcular el factorial de un número negativo."
	FinSi
FinProceso
