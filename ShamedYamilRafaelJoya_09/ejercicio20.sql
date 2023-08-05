--Selecciona el nombre del producto y el nombre del cliente de todos los productos vendidos en el último mes.
SELECT p.nombre_producto, c.nombre_cliente
FROM ventas v
JOIN productos p ON v.id_producto = p.id_producto
JOIN clientes c ON v.id_cliente = c.id_cliente
WHERE v.fecha_venta >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)