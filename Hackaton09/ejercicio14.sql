--Muestra el nombre del producto y la cantidad en stock de todos los productos que tengan una cantidad en stock inferior a 10.
SELECT nombre_producto, cantidad_en_stock 
FROM productos 
WHERE cantidad_en_stock < 10;