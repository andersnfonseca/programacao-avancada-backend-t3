// setTimeout(myFunction, 5000) 

// function  myFunction(){
//   console.log('esperando 5 segundos para aparecer...')
// }

// console.log('quando isso aparece?')

// setTimeout(() => {
//   console.log('esperando 5 segundos para aparecer...')
// }, 5000);


// function exibirData(){
//     let data = new Date()
//     let dia = data.getDay()
//     let mes = data.getMonth()
//     let ano = data.getFullYear()    
//     console.log(`dia: ${dia} mes: ${mes} ano: ${ano}`)
//     console.log('full date' + data)
// }
// setTimeout(exibirData, 5000)
// setTimeout(exibirData, 5000)
// setTimeout(exibirData, 5000)

// const fs = require('fs')
// console.log('Primeira saída')
// fs.readFile('./texto.txt', callback)
// function callback(err, content){
//     if (err) return console.error(err)
//     console.log(String(content))
// }
// console.log('Segunda saída')
// console.log('Terceira saída')

// function soma(callbackSucesso, callbackErro) {
//     const resultado = 1 + 1
//     if (resultado === 2) callbackSucesso()
//     else callbackErro()
// }

// function sucesso() {
//     console.log('Sucesso! ')
// }

// function erro() {
//     console.log('Erro!')
// }

// soma(() => {
//     console.log('Sucesso')
// },   () => {
//     console.log('Erro!')
// })

// const p = new Promise((resolve, reject) => {
//     const resultado = 1 + 1
//     if (resultado === 2) resolve('Sucesso!')
//     else reject('Erro!')
// })

// p.then((msgSucesso) => {
//     console.log(msgSucesso)
// }).catch((msgErro) => {
//     console.log(msgErro)
// })

// const melhorProgramador = 'João Felix'

// function oMelhor(callbackSucesso, callbackErro) {
//     if(melhorProgramador == 'João Felix') {
//         callbackSucesso({
//             nome: melhorProgramador, 
//             msg: 'humildemente o melhor!'
//         })
//     }else{
//         callbackErro({
//             msg01: 'Tá errado!',
//             msg02: melhorProgramador + ', sério? '
//         })
//     }
// }

// oMelhor((objeto) => {
//     console.log(objeto.nome + ' é ' + objeto.msg)
// }, (objeto) => {
//     console.log(objeto.msg02 + objeto.msg01)
// })

const melhorProgramador = 'João Felix'

const p = new Promise((resolve, reject) => {
    if(melhorProgramador == 'João Felix') {
        resolve({
            nome: melhorProgramador, 
            msg: 'humildemente o melhor!'
        })
    }else{
        reject({
            msg01: 'Tá errado!',
            msg02: melhorProgramador + ', sério? '
        })
    }
})

p.then((objeto) => {
    console.log(objeto.nome + ' é ' + objeto.msg)
}).catch((objeto) => {
    console.log(objeto.msg02 + objeto.msg01)
})
