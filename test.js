// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("3.5 euro should be 3.745 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected =3.745;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("4000 yen should be 22.23642172523962 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromYenToPound(4000);

    // Si 1000 yen son 5.559105431309905 pound, entonces 4000 yen debe ser (22.23642172523962)
    const expected =22.23642172523962;

    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected); // Si 1000 yen son 5.559105431309905 pound, entonces 4000 yen debe ser (22.23642172523962)
});

test("1 dollars should be  146.26168224299064 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(5);

    // 1 dollars should be  146.26168224299064 yen, entonces 5 dollar debe ser (731.3084112149533 )
    const expected =731.3084112149533;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 dolar son 146.26168224299064 yen, entonces 5 dolars deberían ser = (731.3084112149533)
});
