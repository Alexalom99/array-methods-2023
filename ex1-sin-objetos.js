/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obtener la información requerida
 *
 *  Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */

//numbers.forEach((number) => console.log(number));

/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */

//console.log(numbers.find((x) => x > 10));

/**
 * Utliza el método some para saber si existe un número mayor de 20
 */
//let result = numbers.some(x => x > 20);

/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */

let result = numbers.every(x => Math.abs(x%2) == 1);

/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */
result = numbers.filter(x => x>3 && x<9);
/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */

result = numbers.map(x => {
    if (x > 0) {
        return 1;
    }
    else {
        return -1;
    }
})

console.log(result);