Proceso salario1
	horas = 0
	costo1 = 20
	costo2 = 25
	Imprimir "Ingrese cantidad de horas trabajadas"
	Leer horas
	Si horas <= 40 y horas >0 Entonces
		salario = horas * costo1
		Imprimir "El salario es de " salario
	SiNo
		Si horas > 40 Entonces
			salario = 40*costo1 + (horas - 40)*costo2
			Imprimir "El salario es de " salario
		SiNo
			Imprimir "Ha ingresado un valor inválido"
		Fin Si
	Fin Si
	
FinProceso
