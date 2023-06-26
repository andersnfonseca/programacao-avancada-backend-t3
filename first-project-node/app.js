// setTimeout(myFunction, 5000) 

// function  myFunction(){
//   console.log('esperando 5 segundos para aparecer...')
// }

// console.log('quando isso aparece?')

// setTimeout(() => {
//   console.log('esperando 5 segundos para aparecer...')
// }, 5000);


function exibirData(){
    let data = new Date()
    let dia = data.getDay()
    let mes = data.getMonth()
    let ano = data.getFullYear()    
    console.log(`dia: ${dia} mes: ${mes} ano: ${ano}`)
    console.log('full date' + data)
}
setTimeout(exibirData, 5000)
setTimeout(exibirData, 5000)
setTimeout(exibirData, 5000)
