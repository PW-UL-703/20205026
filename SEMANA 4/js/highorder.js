/*
reduce
*/

let data = [1,2,3,4,5,6,7,8,9,10]
let suma = 0
for ( let i = 0; i <data.length; i++){
    suma = suma + data[i]
}

console.log("Suma ", suma)

console.log("* * * usando Reduce * * *")
const suma2 = data.reduce( (total, valorActual, idx) => {
    console.log("reduce", idx)
    return total +valorActual
})
console.log("La suma usando REDUCE es ", suma2)

/*
For each
*/

let total = data.forEach((item, idx) = > {
    console.log(item, ' - ', idx)
})

suma = 0
data.forEach( (item) => {
    suma += item
})
console.log("Suma usando Foreach ", suma)

/*
MAP
*/

const data2 = data.map( (item) => {
    return item*5
})
console.log(data2)

const alumnos = ['Carlitos','Luchito','Anita','Pepito']
const asistencia = alumnos.map( (nombre) => {
    return nombre + " presente "
})
console.log( asistencia )
