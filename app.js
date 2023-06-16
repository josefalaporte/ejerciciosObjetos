// 1: Crea un objeto con las propiedades: nombre, apellido, edad, email, dirección y muestra los valores de cada propiedad. (por consola).

const persona = {
    nombre: 'Josefa',
    apellido: 'laporte',
    edad: 25,
    email: 'laportejosefa@gmail.com',
    direccion: '123 fake st',
    mostrarinfo: function () {
        console.log(`El nombre de la persona es ${this.nombre}, el apellido es ${this.apellido}, su edad ${this.edad}, email ${this.email}, su direccion ${this.direccion}`);
    }
   
}
persona.mostrarinfo();


// 2: Crear un objeto que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Inglés, programación y HTM, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media(promedio) de sus calificaciones.

const alumno = {
    nombre: 'Josefa',
    edad: 15,
    materia: {
        html: 6,
        programacion: 7,
        ingles: 6,
    },
    promedioNotas: function () {
        const promedio = ((this.materia.html + this.materia.programacion + this.materia.ingles)/3)
        console.log(`El promedio de ${this.nombre} es ${promedio}`)

    }
}
alumno.promedioNotas();


// 3: Define un objeto, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Mostrar por consola.

const producto = {
    precio: 5000,
    descuento: 0.25,
    neto: function () {
        const descuento = (this.precio - (this.precio * this.descuento))
        console.log(`El precio final de ${this.producto} es ${descuento}`)
    }
}
producto.neto();

