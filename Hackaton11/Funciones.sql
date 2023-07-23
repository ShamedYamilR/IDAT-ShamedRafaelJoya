/*Función para sumar dos números enteros*/
CREATE OR REPLACE FUNCTION sumar_enteros (primer_numero integer,segundo_numero integer)
RETURNS integer AS
$$
DECLARE
resultado integer;
BEGIN 
	resultado := primer_numero + segundo_numero;
	RETURN resultado;
	
END;
$$
LANGUAGE plpgsql;

SELECT sumar_enteros(1,3);

/*Función para calcular el área de un círculo.*/
CREATE OR REPLACE FUNCTION area_circulo (radio double precision)
RETURNS double precision AS
$$
DECLARE
resultado double precision;
BEGIN 
	resultado := radio * pi();
	RETURN resultado;
	
END;
$$
LANGUAGE plpgsql;

SELECT area_circulo(3);


/*Función para verificar si un número es primo.*/
CREATE OR REPLACE FUNCTION es_primo(numero integer) RETURNS boolean AS $$
DECLARE
  divisor integer;
BEGIN
  IF numero <= 1 THEN
    RETURN FALSE;
  END IF;

  FOR divisor IN 2..floor(sqrt(numero)) LOOP
    IF numero % divisor = 0 THEN
      RETURN FALSE;
    END IF;
  END LOOP;

  RETURN TRUE;
END;
$$ LANGUAGE plpgsql;

SELECT es_primo(7); -- Devolverá TRUE
SELECT es_primo(10); -- Devolverá FALSE


/*Procedimiento para insertar un nuevo empleado en la tabla "empleados".*/
CREATE TABLE empleados (
    id serial PRIMARY KEY,
    nombre text NOT NULL,
    puesto text NOT NULL,
    salario numeric NOT NULL
);

CREATE OR REPLACE PROCEDURE insertar_empleado(
    emp_id integer,
    emp_nombre text,
    emp_puesto text,
    emp_salario numeric
)

LANGUAGE plpgsql
AS $$
BEGIN

      /*
      IF emp_salario>2000 THEN
          RAISE EXCEPTION 'Soprepaso el salario minimo';
        END IF;
        */ 

    INSERT INTO empleados (id, nombre, puesto, salario)
    VALUES (emp_id, emp_nombre, emp_puesto, emp_salario);

END;
$$;

CALL insertar_empleado(4, 'Juan Perez','Perez', 'Analista', 40000.00);
CALL insertar_empleado(3, 'Maria Vargas','Perez', 'BacK Office', 3000.00);
CALL insertar_empleado(2, 'Mario Gomez','Perez', 'Analista', 1000.00);
CALL insertar_empleado(1, 'Jayro Bautista','Perez', 'Analista', 10000.00);

SELECT * FROM empleados;

/*Procedimiento para actualizar el salario de un empleado en la tabla "empleados" por ID.*/
CREATE OR REPLACE PROCEDURE actualizar_salario_empleado(
  emp_id integer,
  emp_salario numeric
)
LANGUAGE plpgsql
AS $$
BEGIN

    UPDATE empleados
  SET salario = emp_salario
  WHERE id = emp_id;

END;
$$;

CALL actualizar_salario_empleado(4, 2000.00);

SELECT * FROM empleados;


/*Procedimiento para eliminar un empleado de la tabla "empleados" por ID.*/
CREATE OR REPLACE PROCEDURE eliminar_empleado(
  emp_id integer
)
LANGUAGE plpgsql
AS
$$
BEGIN
  DELETE FROM empleados
  WHERE id = emp_id;
    
END;
$$;
CALL eliminar_empleado(4);

SELECT * FROM empleados;

/*Trigger para registrar la fecha de inserción de un nuevo empleado en la tabla "empleados".*/

ALTER TABLE empleados
ADD COLUMN fecha_insercion timestamp;

/***********Trigger para registrar la fecha de inserción de un nuevo empleado en la tabla "empleados".*********************/
CREATE OR REPLACE FUNCTION registrar_fecha_insercion()
RETURNS TRIGGER AS
$$
BEGIN
  NEW.fecha_insercion := NOW();
  RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER tr_registrar_fecha_insercion
BEFORE INSERT ON empleados
FOR EACH ROW
EXECUTE FUNCTION registrar_fecha_insercion(); 

CALL insertar_empleado(6, 'Juan Perez', 'Analista', 60000.00);

select * from empleados

/*Trigger para evitar la eliminación de empleados con más de 5 años de antigüedad.*/

ALTER TABLE empleados
ADD COLUMN fecha_contrato date;


CREATE OR REPLACE FUNCTION verificar_antiguedad_empleado()
RETURNS TRIGGER AS $$
BEGIN
  IF (OLD.fecha_contrato <= current_date - interval '5 years') THEN
    RAISE EXCEPTION 'No se permite eliminar empleados con más de 5 años de antigüedad.';
  END IF;
  
  RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_verificar_antiguedad_empleado
BEFORE DELETE ON empleados
FOR EACH ROW
EXECUTE FUNCTION verificar_antiguedad_empleado();

INSERT INTO empleados (nombre, puesto, salario,fecha_contrato)
    VALUES ('Lucho Arca','Analista', 3000.00, '2017-05-11');


select * from empleados

/*Función para calcular el promedio de los salarios de todos los empleados.*/


CREATE OR REPLACE FUNCTION calcular_promedio_salarios()
RETURNS NUMERIC
LANGUAGE plpgsql
AS 
$$
DECLARE
  total_salarios NUMERIC;
  cantidad_empleados INTEGER;
  promedio_salarios NUMERIC;
BEGIN
  -- Obtener el total de salarios de todos los empleados
  SELECT SUM(salario) INTO total_salarios FROM empleados;

  -- Obtener la cantidad de empleados
  SELECT COUNT(*) INTO cantidad_empleados FROM empleados;

  -- Calcular el promedio de salarios
  IF cantidad_empleados > 0 THEN
    promedio_salarios := total_salarios / cantidad_empleados;
  ELSE
    promedio_salarios := 0;
  END IF;

  RETURN promedio_salarios;
END;
$$;

SELECT calcular_promedio_salarios();

select * from empleados

/*Función para obtener el nombre completo de un empleado concatenando nombre y apellido.*/

ALTER TABLE empleados
ADD COLUMN apellidos text;

CREATE OR REPLACE FUNCTION obtener_nombre(emp_id integer)
RETURNS TEXT 
LANGUAGE plpgsql
AS $$
DECLARE
  nombre_completo TEXT;
BEGIN
  
  SELECT nombre || ' ' || apellido INTO nombre_completo
  FROM empleados
  WHERE id = obtener_nombre.emp_id;

  RETURN nombre_completo;
END;
$$;


/*INSERT INTO empleados (nombre, puesto, salario,fecha_contrato,apellidos)
    VALUES ('Pepito','Analista',2500.00,'2020-05-21','Gomez');*/
	

SELECT nombre || ' ' || apellidos AS nombre_completo
FROM empleados
WHERE id = 7;

SELECT CONCAT (nombre, ' ', apellidos) AS nombre_completo
FROM empleados
WHERE id = 7;


select * from empleados;


/*Procedimiento para asignar un nuevo jefe a un departamento y actualizar los empleados afectados*/
CREATE TABLE departamento (
    id serial PRIMARY KEY,
    nombre varchar(45),
   nro_empleados integer

);

 INSERT INTO departamento (nombre, nro_empleados)
    VALUES ('juan', 3);
 INSERT INTO departamento (nombre, nro_empleados)
    VALUES ('Diego', 2);
 INSERT INTO departamento (nombre, nro_empleados)
    VALUES ('Ruben', 1);
	
	
select * from departamento;


CREATE TABLE jefe (
    id serial PRIMARY KEY,
    nombre varchar(45),
    apellido varchar(60),
       id_departamento integer,
    foreign key (id_departamento) references "departamento"(id)
);

INSERT INTO jefe (nombre, apellido)
    VALUES ('Humberto', 'Silva');
	
select * from jefe;
 
 

CREATE OR REPLACE FUNCTION actualizar_numero_empleados()
RETURNS TRIGGER AS
$$
BEGIN
    UPDATE departamento
    SET nro_empleados = nro_empleados + 1
    WHERE id = NEW.id_departamento;

    /*1, obtener su antiguo departamento
        OLD.id_departamento
    2. obtener su nuevo departamento
        NEW.id_departamento
    3. si cambiado
    antiguo restarle 1
    y al nuevo sumarle 1
    */


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;

 

CREATE TRIGGER trigger_actualizar_numero_empleados
AFTER INSERT ON jefe
FOR EACH ROW
EXECUTE FUNCTION actualizar_numero_empleados();

insert into departamento(nombre,nro_empleados) values('ventas',0);
insert into departamento(nombre,nro_empleados) values('almacen',0);

select * from departamento


insert into jefe(nombre, apellido,id_departamento) values ('jose','montenegro',1);
insert into jefe(nombre, apellido,id_departamento) values ('juan','paredes',2);


/*Procedimiento para aumentar el salario de todos los empleados en un departamento.*/

ALTER TABLE departamento
ADD COLUMN salario numeric;

select * from departamento;

insert into departamento(nombre,nro_empleados,salario) values('Marketig',1, 2500.00);
insert into departamento(nombre,nro_empleados,salario) values('Recursos Humanos',1, 3000.00);

CREATE OR REPLACE PROCEDURE aumentar_salario_en_departamento(id_departamento INTEGER, aumento NUMERIC)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE empleados
  SET salario = salario + aumento
  WHERE id = id_departamento;
  
  -- Opcional: Puedes agregar una SELECT para mostrar los empleados actualizados
  -- SELECT * FROM empleados WHERE departamento_id = depto_id;
END;
$$;

CALL aumentar_salario_en_departamento(7, 4000); -- Donde 1 es el depto_id y 1000 es el aumento en salario

select * from departamento;

select * from empleados;

/*Procedimiento para eliminar todos los registros de una tabla (con confirmación).*/

CREATE OR REPLACE PROCEDURE eliminar_registros_con_confirmacion(tabla_name TEXT)
LANGUAGE plpgsql
AS $$
DECLARE
  confirmacion TEXT;
BEGIN
  -- Pedir confirmación al usuario antes de eliminar
  RAISE NOTICE '¿Está seguro que desea eliminar todos los registros de la tabla %?', tabla_name;
  GET DIAGNOSTICS confirmacion = ROW_COUNT;

  IF confirmacion = 0 THEN
    RAISE NOTICE 'Operación cancelada por el usuario.';
  ELSE
    -- Agregar un retardo de 5 segundos para dar tiempo al usuario de cancelar la operación
    PERFORM pg_sleep(5);

    -- Eliminar todos los registros de la tabla
    EXECUTE 'DELETE FROM ' || tabla_name;
    RAISE NOTICE 'Se han eliminado todos los registros de la tabla %.', tabla_name;
  END IF;
END;
$$;

CALL eliminar_registros_con_confirmacion('nombre_de_la_tabla');

/*Función para obtener una lista de empleados ordenados por salario de forma descendente.*/

CREATE OR REPLACE FUNCTION obtener_empleados_por_salario_desc()

RETURNS TABLE ( emp_id INTEGER, emp_nombre TEXT, emp_apellido TEXT, emp_salario NUMERIC)

LANGUAGE plpgsql

AS 

$$

BEGIN

  RETURN QUERY

  SELECT id AS emp_id,nombre as emp_nombre,apellidos as emp_apellido,salario as emp_salario

  FROM empleados

  ORDER BY salario DESC;

END;

$$;

 
SELECT * FROM obtener_empleados_por_salario_desc();


select * from empleados ORDER BY salario DESC;


/*Función para obtener la cantidad de empleados por departamento.*/

CREATE OR REPLACE FUNCTION obtener_cantidad_empleados_por_departamento()
RETURNS TABLE (id_departamento INTEGER, cantidad_empleados INTEGER)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT id_departamento, COUNT(*) as cantidad_empleados
  FROM empleados
  GROUP BY id_departamento;
END;
$$;


SELECT * FROM obtener_cantidad_empleados_por_departamento();


SELECT * FROM EMPLEADOS;

/*Función para obtener el salario máximo de todos los empleados.*/
