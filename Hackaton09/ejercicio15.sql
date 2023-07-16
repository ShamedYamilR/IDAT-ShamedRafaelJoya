--Selecciona el nombre del producto y la cantidad vendida de todos los productos que tengan una cantidad vendida entre 50 y 100.
SELECT nombre_producto, cantidad_vendida 
FROM productos 
WHERE cantidad_vendida 
BETWEEN 50 AND 100;