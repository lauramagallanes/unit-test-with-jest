// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // british pound
// }

// 1 euro = 1.2 dolares
// 1 euro = 127.9 yenes
// 1.2 dolares = 127.9 yenes
// 1 dolares = 106.5833333 yenes

// 1 euro = 127.9 yenes
// 1 euro = 0.8 pounds
// 127.9 yenes = 0.8 pounds
// 1 yen = 0.00625488663

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// declaramos la funcion para convertir de dolares a yenes

const fromDollarToYen = function(valueInDollar) {
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 106.5833333;
    // retornamos el valor
    return valueInYen;
}

// declaramos la funcion que conviete yenes a pounds

const fromYenToPound = function(valueInYen) {
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.00625488663;
    // retornamos el valor
    return valueInPound;
}
// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};