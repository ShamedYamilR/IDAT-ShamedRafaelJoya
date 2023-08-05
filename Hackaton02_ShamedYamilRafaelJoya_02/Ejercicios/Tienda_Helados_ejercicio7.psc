Proceso Tienda_Helados_ejercicio7
	
	Definir compra,descuento Como Real
	Definir tipo Como Entero
	
	Escribir "Ingrese Total de Compra"
	
	Leer compra
	
	Escribir "Ingrese una Opcion"
	Escribir "Membresia 1"
	Escribir "Membresia 2"
	Escribir "Membresia 3"
	
	Leer tipo
	
	Si tipo ==1 Entonces
		descuento = compra*0.10
		SiNo
			Si tipo==2 Entonces
				descuento = compra*0.15
			sino
				si tipo ==3 Entonces
					descuento = compra*0.20
						sino
							descuento = 0
				FinSi
		FinSi
	FinSi
	
	Escribir "El total a pagar es: S/.",compra-descuento
	Escribir "El descuento aplicado es: S/.",descuento
//	Si m=A Entonces
//		Escribir "Membresía A cuenta con un 10% de descuento"
//	Sino
//		Escribir "Membresia erronea"
//	FinSi
	
FinProceso
