--Selecciona el nombre y el apellido de los empleados que hayan nacido antes de 1980.
SELECT nombre, apellido
FROM empleados
WHERE YEAR(fecha_nacimiento) < 1980;