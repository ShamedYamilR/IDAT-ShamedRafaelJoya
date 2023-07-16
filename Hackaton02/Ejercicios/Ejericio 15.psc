Algoritmo centimetros_kg
	Imprimir "Escriba C si quiere transformar centimetros, L si quiere libras y A si es para ambos"
	Leer letra
	Si letra == "C" Entonces
		Imprimir "Escriba los centimetros a transformar"
		Leer num
		num = num * 0.39370079
		Imprimir "Su equivalente es: ", num, " pulgadas"
	SiNo 
		Si letra == "L" Entonces
			Imprimir "Escriba las libras a transformar"
			Leer num
			num = num * 0.45359237
			Imprimir "Su equivalente es: ", num, " Kilogramos"
		SiNo
			Si letra == "A" Entonces
				Imprimir "Escriba los centimetros y las libras a transformar"
				Leer num1
				Leer num2
				num1 = num1 * 0.39370079
				num2 = num2 * 0.45359237
				Imprimir "Su equivalente es: ", num1, " pulgadas"
				Imprimir "Su equivalente es: ", num2, " Kilogramos"
			SiNo
				Imprimir "Opción no valida"
			Fin Si
		Fin Si
	Fin Si
	
FinAlgoritmo
