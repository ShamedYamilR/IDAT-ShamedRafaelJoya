Algoritmo Pago_empleado
	Imprimir "Escribir el tipo de Empleado: Cajero(1), Servidor(2), Preparador(3) y Matenimiento (4)"
	Leer num
	Segun num Hacer
		1:
			pago = 56
		2:
			pago = 64
		3:
			pago = 80
		4:
			pago = 48
		De Otro Modo:
			Imprimir "Opción de trabajador no valida"
	Fin Segun
	
	Imprimir "Escribir el numero de días (Máximo 6)"
	leer dias
	pago = pago * dias
	Imprimir "El pago correspondiente sería de: ",pago
FinAlgoritmo
