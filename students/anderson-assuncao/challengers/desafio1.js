let numeros = [5, 10, 15, 20, 25]

let [n1, n2, n3, n4, n5] = numeros; 

console.log(n1, n2, n3, n4, n5)

let objNumeros = {
    vetor1: n1,
    vetor2: n2,
    vetor3: n3,
    vetor4: n4,
    vetor5: n5
}

console.log(objNumeros.vetor1, objNumeros.vetor2, objNumeros.vetor3, objNumeros.vetor4, objNumeros.vetor5)

json = JSON.stringify(objNumeros)
json = JSON.parse(json)
console.log(json)