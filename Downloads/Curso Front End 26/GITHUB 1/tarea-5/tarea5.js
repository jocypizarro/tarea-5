// TAREA 5 - JAVASCRIPT //

// Números pares entre 0 y 1000 //

console.log("Cuenta de los números pares del 0 al 1000:");

for (let i = 0; i <= 1000; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// Números impares entre 0 y 1000 //

console.log("Cuenta de los números impares del 0 al 1000:");

for (let i = 0; i <= 1000; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


// Números de la secuencia de Fibonacci hasta 1000 //

console.log("Secuencia de Fibonacci hasta 1000");

let a = 0;
let b = 1;

for (let i = 0; a <= 1000; i++) {
  console.log(a);

  let siguiente = a + b;
  a = b;
  b = siguiente;
}


// Nombres de Pokemon en mayúsculas //

console.log("Pokemon en mayúsculas");

let pokemonStrings = [
  'Pikachu',
  'Charmander',
  'Bulbasaur',
  'Squirtle'
];

let pokemonMayus = pokemonStrings.map(p => p.toUpperCase());

console.log(pokemonMayus);


// Filtro Pokemon de tipo fuego //

console.log("Pokemon tipo fuego");

let pokemon = [
  { nombre: 'Pikachu', tipo: 'Electrico' },
  { nombre: 'Charmander', tipo: 'Fuego' },
  { nombre: 'Bulbasaur', tipo: 'Planta' },
  { nombre: 'Squirtle', tipo: 'Agua' },
  { nombre: 'Charmeleon', tipo: 'Fuego' },
  { nombre: 'Weedle', tipo: 'bicho' },
  { nombre: 'Charizard', tipo: 'Fuego' }
];

let fuego = pokemon.filter(p => p.tipo === 'Fuego');

console.log(fuego);