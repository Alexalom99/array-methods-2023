const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
//students.forEach(s => console.log(s));
// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"
let result = students.findIndex(s => s === "Maria");

// Utiliza el método some para saber si en este array existe la alumna "Katerina"

result = students.some( s => s === "Katerina");

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres

result = students.find( s => s.length <= 5);

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres

result = students.every(s => s.length > 4);

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i

result = students.filter( s => s.includes('i'));

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre

result = students.map( s => s.at(0));

console.log(result);