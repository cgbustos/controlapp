
// var variable_de_alcance_global = 57;

// // tipos de variables segun dato a guardar


// // primitavas
//     // numerica
//     edad = 55;
//     console.log(edad);

//     // string o caracteres
//     nombre = "Juan ramon"
//     console.log(nombre)

//     // null
//     variable_null = null;
//     console.log(variable_null)

//     // undefined o indefinida
//     // joasgjokgak;
//     // console.log(joasgjokgak);
//     // NaN

// // compuestas
//     // objetos
//     objeto = {
//         nombre: "Juan ramon",
//         edad: 15,
//     }
//     console.log(objeto)
//     // arreglos
//     arreglo = [edad, nombre, objeto, 656]
//     //          0      1       2      3
//     console.log(arreglo[0])


// // tipos de variables segun el alcance al declarlas


// // {
// //     let variable_de_alcance_local = 56;
// //     const variable_constante_de_alcance_local = 55;
// //     console.log(variable_de_alcance_local)
// // }

// // console.log(variable_de_alcance_global)
// // console.log(variable_de_alcance_local)
// // console.log(variable_constante_de_alcance_local)


// // let variable_que_cambia_de_valor;
// // const constante = "";
// // var variable_antiguita;

// // primitivos
// let numero = 10
// let flotante = 10.12;
// let string = "cadena de caracteres"
// let booleano = true;
// let booleano2 = false;

// // compuestos
// const lista_uno = [numero, flotante, booleano, string];
// const objetos = {
//     "edad": numero,
//     "edad2": 56,
// }


// logica
/*
estado logico alto o 1 logico o verdadero
estado logico bajo o 0 logico o falso

falsy
    - false;
    - cadena vacia
    - 0
truthy
    - true;
    - cadena cualquiera
    - objecto o una variable compuesta
    - cualquier numero distinto de 0
*/

let edad_pedrito = 5;
let edad_juan = "5";
let comparador = edad_juan > edad_pedrito;

if (comparador){
    console.log("Pedrito esta viejo")
} else {
    console.log("Juan esta viejo")
}

// operadores de compracion
/*
> (mayor)
>= (mayor o igual)
< (menor o igual)
<= (menor o igual)
== (igual)

propios de javascript
=== (igual en valor y en tipo de dato) 3 === "3"
<== (menor o igual en tipo de dato)
>== (mayor o igual en tipo de dato)

compracion logica
&& false && true -> false
|| false || true -> true

*/

if (edad_juan === edad_pedrito){
    console.log("Hola jose")
}


// strings documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// template_string
let cadena_hola_largo = `
<div>
    <ul>
        <li>Hola josema</li>
    </ul>
</div>
`
console.log(cadena_hola_largo)

