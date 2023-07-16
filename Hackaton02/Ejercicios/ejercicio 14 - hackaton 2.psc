Proceso EJERCICIO14
	Definir numero, divisor, resto como Entero
	
    Escribir "Ingrese un número:"
    Leer numero
	
    Si numero < 2 entonces
        Escribir "El número no es primo."
    Sino
        divisor <- 2
        Mientras divisor < numero y resto <> 0 hacer
            resto <- numero % divisor
            divisor <- divisor + 1
        Fin Mientras
		
        Si resto = 0 entonces
            Escribir "El número no es primo."
        Sino
            Escribir "El número es primo."
        Fin Si
    Fin Si

FinProceso
