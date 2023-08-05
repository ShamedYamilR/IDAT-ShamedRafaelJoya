Proceso Ejercicio20
	Definir a,b,c,d Como Entero
	
	Escribir "Digite 4 numeros"
	
	Leer a,b,c,d 
	
	Si a >= 1000 y a <=9999
		Escribir "El numero es Entero Positivo: ",a
	SiNo
		Si a < 0
			Escribir "El numero no es un Entero Positivo ",a
		FinSi
	FinSi
	
	Si b >= 1000 y b <=9999
		Escribir "El numero es Entero Positivo: ",b
	SiNo
		Si b < 0
			Escribir "El numero no es un Entero Positivo ",b
		FinSi
	FinSi
	
	Si c >= 1000 y c <=9999
		Escribir "El numero es Entero Positivo: ",c
	SiNo
		Si c < 0
			Escribir "El numero no es un Entero Positivo ",c
		FinSi
	FinSi
	
	Si d >= 1000 y d <=9999
		Escribir "El numero es Entero Positivo: ",d
	SiNo
		Si d < 0
			Escribir "El numero no es un Entero Positivo ",d
		FinSi
	FinSi
	
	Si a>b y a>c y a>d Entonces
		Escribir "El mayor es: ",a
	SiNo
		Si b>a y b>c y b>d Entonces
			Escribir "El mayor es: ",b
		SiNo
			Si c>a y c>b y c>d Entonces
				Escribir "El mayor es: ",c
			Sino 
				si d>a y d>b y c>d Entonces
					Escribir "El mayor es: ",d
				FinSi
			FinSi
		FinSi
	FinSi
	
	cont=0
	
	
	Si a%2==0 Entonces
		Escribir "El numero es par ",a
		cont= cont+1
	SiNo
		Escribir "El numero no es par ",a
	FinSi
	
	Si b%2==0 Entonces
		Escribir "El numero es par ",b
		cont= cont+1
	SiNo
		Escribir "El numero no es par ",b
	FinSi
	
	Si c%2==0 Entonces
		Escribir "El numero es par ",c
		cont= cont+1
		cb= b*b
	SiNo
		Escribir "El numero no es par ",c
	FinSi
	
	Si d%2==0 Entonces
		Escribir "El numero es par ",d
		cont= cont+1
	SiNo
		Escribir "El numero no es par ",d
	FinSi
	
	Si a<d Entonces
		m<-(a+b+c+d)/4
		Escribir "La Media de los numeros ingresados: ",m
	FinSi
	
	Si b>c Entonces
		si c>=50 y c<=700 Entonces
			s<-(a+b+c+d)
			Escribir "La suma de los 4 numeros es: ",s
		FinSi
	FinSi
	
	
FinProceso
