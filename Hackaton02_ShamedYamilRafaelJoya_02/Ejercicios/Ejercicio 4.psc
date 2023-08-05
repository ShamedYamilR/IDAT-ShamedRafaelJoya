Algoritmo Menor_a_Mayor
	Imprimir "Ingrese los 3 numero que quiere organizar"
	leer num1,num2,num3
	Si num1>num2 Entonces
        may1<-num1
        may2<-num2
    Sino
        may1<-num2
        may2<-num1
	FinSi
	
	Si num3>may1 Entonces
        may1<-num3
        may2<-num1
		may3<-num2
    SiNo Si num3<may2
        may1<-num1
        may2<-num2
		may3<-num3
	SiNo
		may1<-num1
        may2<-num3
		may3<-num2
	FinSi
	FinSi

Imprimir "Los numero ordenador de menor a mayor son:", may3," - ",may2," - ",may1
FinAlgoritmo
