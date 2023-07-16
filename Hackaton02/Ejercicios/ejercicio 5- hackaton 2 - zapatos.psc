PROCESO tarea	
	Cantidad = 0
	Precio = 10
	Descuento = 0
	
	Imprimir "Ingrese cantidad de zapatos"
	Leer Cantidad
	
	Si Cantidad > 10 Y Cantidad <= 20 Entonces
		Descuento = 0.1
	SiNo
		Si Cantidad > 20 y Cantidad <= 30 Entonces
			Descuento = 0.2
		SiNo
			Si Cantidad>30 Entonces
				Descuento = 0.4
			SiNo
				Descuento = 0
			Fin Si
		Fin Si
	Fin Si
	Total = Cantidad * Precio * (1 - Descuento)
	Imprimir "El precio total es " Total
	
FinProceso
