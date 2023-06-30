//array asociativo
/*
let pc1 = {
    nombre: 'SantiPC',
    procesador: 'Core I5',
    ram: '8GB',
    espacio: '1TB'
};

let nombre = pc1['nombre'];
let procesador = pc1['procesador'];
let ram = pc1['ram'];
let espacio = pc1['espacio'];

let frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
             el procesador es: <b>${procesador}</b> <br>
             la memoria ram es: <b>${ram}</b> <br>
             el espacio de almacenamiento es de: <b>${espacio}</b>`;

document.write(frase);
*/

//BUCLES

// while
/*
let numero = 0;

while (numero < 6) {
    numero++;
    document.write(numero + '<br>');
};
*/

// do while
/*
let numero = 0;

do {
    document.write(numero + '<br>');
    numero++;    
};

while (numero > 6)
*/

//break
/*
let numero = 0;

while (numero < 1000) {
    numero++;
    document.write(numero + '<br>');
    if (numero == 10) {
        break;
    }
};

document.write('fin');
*/

//for

for (let i = 1; i <= 5; i++) {
    if (i == 4) {
        continue;
    }
    document.write(i + '<br>');
}