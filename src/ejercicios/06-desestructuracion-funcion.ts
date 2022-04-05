

console.log('Hola Mundo!!!!');

interface InterfaceReproductor{
    volumen: number; 
    segundo: number;
    cancion: string;
    detalles: InterfaceDetalles;
}

interface InterfaceDetalles{
    autor: string;
    anio: number;
}

const reproductor: InterfaceReproductor ={
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Vitty',
        anio: 1995        
    }
}

console.log(' El volumen actual es de: ', reproductor.volumen)
console.log(' El segundo actual es de: ', reproductor.segundo)
console.log(' La cancion actual es de: ', reproductor.cancion)
console.log(' El autor es: ', reproductor.detalles.autor)