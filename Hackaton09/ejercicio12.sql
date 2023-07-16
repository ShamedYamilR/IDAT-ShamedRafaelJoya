--Muestra los nombres de los productos que contengan la palabra "azul" en su descripción.
SELECT nombre_producto FROM productos WHERE descripcion LIKE '%azul%';