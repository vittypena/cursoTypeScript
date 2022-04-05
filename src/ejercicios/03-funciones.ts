

console.log('Hola Mundo!!!!');

//Funciones******
//Parametros con el tipo y luego: el dato que retorna
function sumar(a: number, b: number): number{
    //Se puede hacer un toString de esta manera.
    //return (a + b).toString;
    return a + b
}

//Otra manera de poner una funcion
const sumarFlecha = (a: number, b: number):number => {
    return a + b
}

//Funcion con argumento opcional y por defecto, el argumento opcional va despues de los obligatorios y los argumentos por defecto van despues.
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;      //Podemos ponerle una funcion obligatoria a la interfaz del objeto
}
//Funcion vacia
function curar( personaje: PersonajeLOR, curarX: number): void{
    //Da por supuesto que personaje.hp va a existir.
    personaje.pv += curarX;
    console.log(personaje);
}

//Creamos un objeto PersonajeLOR
const nuevoPersonaje: PersonajeLOR = { 
    nombre: 'Strider', 
    pv:50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv)
    }
}
//Utilizamos la constante
curar(nuevoPersonaje, 20)

const resultado = sumar(1, 5);
const resultado2 = multiplicar(1, 5);
console.log(resultado)

