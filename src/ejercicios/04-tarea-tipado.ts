

console.log('Hola Mundo!!!!');

//Creamos el objeto superHeroe
const superHeroe ={
    nombre: 'Spiderman',
    edad: 30,
    direccion:{     //Objeto anidado dentro de superherooe
            calle: 'Main St',
            pais: 'USA',
            ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion )
