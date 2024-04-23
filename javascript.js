
var variable_de_alcance_global = 57;

// tipos de variables segun dato a guardar


// primitavas
    // numerica
    edad = 55;
    console.log(edad);

    // string o caracteres
    nombre = "Juan ramon"
    console.log(nombre)

    // null
    variable_null = null;
    console.log(variable_null)

    // undefined o indefinida
    // joasgjokgak;
    // console.log(joasgjokgak);
    // NaN

// compuestas
    // objetos
    objeto = {
        nombre: "Juan ramon",
        edad: 15,
    }
    console.log(objeto)
    // arreglos
    arreglo = [edad, nombre, objeto, 656]
    //          0      1       2      3
    console.log(arreglo[0])


// tipos de variables segun el alcance al declarlas


{
    let variable_de_alcance_local = 56;
    const variable_constante_de_alcance_local = 55;
    console.log(variable_de_alcance_local)
}

console.log(variable_de_alcance_global)
console.log(variable_de_alcance_local)
console.log(variable_constante_de_alcance_local)


