-- Tabla de clientes
CREATE TABLE clientes (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  pais VARCHAR(50)
);

-- Tabla de productos
CREATE TABLE productos (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  descripcion VARCHAR(100),
  precio DECIMAL(10,2),
  stock INT
);

-- Tabla de empleados
CREATE TABLE empleados (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  salario DECIMAL(10,2),
  departamento VARCHAR(50),
  fecha_nacimiento DATE
);

-- Tabla de ventas
CREATE TABLE ventas (
  id INT PRIMARY KEY,
  producto_id INT,
  cliente_id INT,
  cantidad INT,
  fecha_venta DATE,
  FOREIGN KEY (producto_id) REFERENCES productos(id),
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);