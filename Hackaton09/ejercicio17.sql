--Muestra el nombre del producto y el nombre del cliente de todos los productos vendidos.
SELECT p.nombre_producto, c.nombre_cliente
FROM productos p
JOIN ventas v ON p.id_producto = v.id_producto
JOIN clientes c ON v.id_cliente = c.id_cliente;