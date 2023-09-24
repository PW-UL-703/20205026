
let ob1 = new Object() //usando el constructor
let obj2 = {} // usando objeto literal

let alumno = {
    nombre : "Pepito",
    codigo : '20230001'
};

// Obtener valores
console.log( alumno.nombre )

// Me olvide asignar propiedades
alumno.ciclo = 2023
alumno.semestre = 2
console.log( alumno )

// Eliminar propiedades
delete alumno.semestre
console.log( alumno )

/*
que pasa cuando la propiedad tiene varias palabras
opcion 1: usar camel case
p.e. apellidoPaterno
opcion 2 : juntar las palabras
p.e. apellidopaterno
opcion 3: usar las palabras como llave
p.e.p 'apellido paterno'
*/

alumno['apellido paterno'] = "Gonzales"
console.log( alumno )

//Recorrer las propiedades del objeto
for ( key in alumno) {
    console.log('la llave ${key} corresponde al valor ${alumno[key]}')
}

// Verificar si una propiedad existe en el objeto
console.log( 'codigo' in alumno)
