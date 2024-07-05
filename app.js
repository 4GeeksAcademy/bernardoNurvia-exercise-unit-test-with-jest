// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// Convertidor de monedas
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const JPY = 156.5
const USD = 1.07
const GBP = 0.87

function fromDollarToYen(USD) {
    return (USD / EUR) * JPY
}
function fromEuroToDollar(EUR) {
    return EUR * USD
}
function fromYenToPound(JPY) {
    return (JPY / EUR) * GBP
}

console.log(fromYenToPound(2));