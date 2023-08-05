--Selecciona el nombre del producto y el nombre del proveedor de todos los productos.
SELECT p.nombre_producto, pr.nombre_proveedor
FROM productos p
INNER JOIN proveedores pr ON p.id_proveedor = pr.id_proveedor;