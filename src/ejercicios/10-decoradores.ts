
//Declarar un decorador que añade nuevas propiedades a la clase
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
        return class extends constructor{
            newProperty = "new property";
            hello = "override";
        };
}

//En tsconfig.json debemos descomentar la linea de experimental decorators para que funcione
@classDecorator
class MiSuperClase{
    public miPropiedad: string = 'ABC123';
    imprimir(){
        console.log('Hola Mundo');
    }
}
const miClase = new MiSuperClase();
console.log(miClase.miPropiedad)
