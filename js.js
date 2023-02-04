//Obtener un numero concreto de numeros aleatorios entre un rango
var randomPick = (n, min, max) => {
    var array = [];
    var random;
    var range = parseFloat(max - min + 1);
    do {
        random = Math.floor(Math.random() * range);
        //hacer que los numeros no se repitan
        if (array.includes(random) === false) {
            array.push(random);
        }
    }
    while (array.length < n);

    console.log(array);
}
randomPick(10, 1, 100)