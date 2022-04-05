

console.log('Hola Mundo!!!!');

//Arreglo****************
/*
let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 100]
habilidades.push(true)*/
let habilidades: string[] = ['Bash', 'Counter', 'Healing']

//Interfaz y Objeto**********************************
//Para trabajar con objetos usamos interface para restringir los objetos y que sea como queramos en concreto, de esta manera se ceñira a eso, evitando errores.
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: String;   //De esta manera pueblo natal es opcional
}
//Objeto añadiendole la interfaz Personaje
const personaje:Personaje = {
    nombre:'Strider',
    hp:100,
    habilidades: ['Bash', 'Counter', 'Healing']
}
//Añadimos el pueblo natal
personaje.puebloNatal = 'Pueblo Paleta'

//Console table imprime el objeto en console
console.table(personaje)
//*********************** */