// Codigo cuadrado

const lcuadrado = 5;
const pcuadrado = lcuadrado*4;
const acuadrado = lcuadrado*lcuadrado;

console.group("cuadrado");
console.log(" El lado del cuadrado mide " + lcuadrado);
console.log(" El perimetro del cuadrado mide " + pcuadrado);
console.log(" El area del cuadrado mide " + acuadrado);
console.groupEnd();

// Codigo Triangulo

const l1triangulo = 5;
const l2triangulo = 5;
const btriangulo = 5;
const htriangulo = 5
const ptriangulo = l1triangulo + l2triangulo + btriangulo;
const atriangulo = (btriangulo*htriangulo)/2;

console.group("Triangulo");
console.log(" El lado del triangulo mide " + l1triangulo + "," + l2triangulo + "," + btriangulo);
console.log(" El perimetro del triangulo mide " + ptriangulo);
console.log(" El area del triangulo mide " + atriangulo);
console.groupEnd();

// Codigo Triangulo

const radiocirculo = 5;
const pcirculo = 2*radiocirculo*Math.PI;
const acirculo = radiocirculo*radiocirculo*Math.PI;

console.group("circulo");
console.log(" El radio del circulo mide " + radiocirculo);
console.log(" El diametro del circulo mide " + pcirculo);
console.log(" El area del circulo mide " + acirculo);
console.groupEnd();