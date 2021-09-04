// Código del cuadrado
console.group('Cuadrados');

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado ** 2;
console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd();

// Código del triángulo
console.group('Triángulos');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  `Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`
);

const alturaTriangulo = 5.5;

console.log(`La altura del triángulo mide: ${alturaTriangulo}`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);

const arealTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${arealTriangulo}cm^2`);

console.groupEnd();

// Código del circulo
console.group('Circulos');

// Radio

const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}cm`);

//Diámetro

const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es: ${diametroCirculo}cm`);

// PI

const PI = Math.PI;
console.log(`PI es: ${PI}`);

// Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del circulo es: ${perimetroCirculo}cm`);

// Area

const areaCirculo = PI * radioCirculo ** 2;
console.log(`El área del circulo es: ${areaCirculo}cm^2`);

console.groupEnd();
