Proceso Ejercicio18
	
	Definir c Como Entero
	Escribir "Ingrese la cantidad de CD´s a comprar"
	Leer c
	
	pt=0
	pCliente=0
	ct=0
	gv=0
	
	Si c<=9 Entonces
		p = 10
	SiNo
		Si c>=10 y c<=99 Entonces
			p = 8
		SiNo
			Si c>=100 y c<=499 Entonces
			p = 7
		SiNo
			Si c>=500
				p= 6
			FinSi
		FinSi
	FinSi
Finsi

pt<- (c*p) + (0.0825*c)
pCliente = pt
ct= c*p
gv= 0.0825*c

Escribir "Precio para el Cliente: ",pCliente
Escribir "Costo total: ",ct
Escribir "Ganancia para el vendedor: ",gv
	
	
FinProceso
