class Usuario {
        constructor(id, nombre, edad, correo, clave) {
            this.id =id;
            this.nombre = nombre;
            this.edad = edad;
            this.correo =correo;
            this.clave =clave;
        
        }

        iniciarSesion(){
            console.log("Inicio de sesión exitoso");
            this.estaAtutenticado = true;
        }

        cerrarSesion(){
            console.log("Sesion finalizada");
            this.estaAtutenticado = false;
        }

}

const usuario1= new Usuario(1,"Juan", "18", "juan@gmail.com", "123456");
console.log(usuario1);
usuario.iniciarSesion();
console.log(usuario1.estaAtutenticado);

const usuario2= new Usuario(2,"Pedro", "20", "pedro@gmail.com", "123456");

const usuarios = [usuario1, usuario2];
console.log(usuarios);

const usuario3 = new Usuario(3,"Luis", 22, "luis@example.com","123456");
usuarios.push(usuario3);
console.log(usuarios);