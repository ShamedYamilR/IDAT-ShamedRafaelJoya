/*Función para obtener el salario máximo de todos los empleados.*/
CREATE OR REPLACE FUNCTION obtener_salario_maximo()
RETURNS NUMERIC AS $$
BEGIN
  RETURN (SELECT MAX(salario) FROM empleados);
END;
$$ LANGUAGE SQL;

SELECT obtener_salario_maximo();

/*Trigger para actualizar automáticamente la fecha de modificación de un registro en una tabla.*/
CREATE OR REPLACE FUNCTION actualizar_fecha_modificacion()
RETURNS TRIGGER AS $$
BEGIN
  NEW.fecha_modificacion := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_actualizar_fecha_modificacion
BEFORE UPDATE ON empleados
FOR EACH ROW
EXECUTE FUNCTION actualizar_fecha_modificacion();

/*Trigger para evitar que se inserten registros duplicados en una tabla.*/

ALTER TABLE clientes
ADD CONSTRAINT uk_numero_identificacion UNIQUE (numero_identificacion);

CREATE OR REPLACE FUNCTION evitar_duplicados()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM clientes
    WHERE numero_identificacion = NEW.numero_identificacion
  ) THEN
    RAISE EXCEPTION 'Ya existe un cliente con el mismo número de identificación.';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_evitar_duplicados
BEFORE INSERT ON clientes
FOR EACH ROW
EXECUTE FUNCTION evitar_duplicados();

/*Trigger para mantener un registro de los cambios realizados en una tabla en una tabla de auditoría.*/

CREATE TABLE auditoria_empleados (
  id SERIAL PRIMARY KEY,
  id_empleado INTEGER,
  accion TEXT,
  fecha_cambio TIMESTAMP
);

CREATE OR REPLACE FUNCTION auditar_cambios()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'UPDATE' THEN
    INSERT INTO auditoria_empleados (id_empleado, accion, fecha_cambio)
    VALUES (NEW.id, 'UPDATE', now());
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_auditar_cambios
AFTER UPDATE ON empleados
FOR EACH ROW
EXECUTE FUNCTION auditar_cambios();
