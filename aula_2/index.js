// const n1 = 2
// const n2 = '3'
// console.log('n1 = ' + n1 + '\nn2 = ' + n2)
// console.log('\nCoerção (cast)')
// // coerção implícita
// const n3 = n1 + n2
// console.log('n1 + n2 = ' + n3) // ocorre concatenação - Resultado: 23

// // coerção explícita
// const n4 = n1 + Number(n2) //|
// const n5 = n1 + +n2        //|_ mesma coisa
// console.log('n4 = ' + n4 + '\nn5 = ' + n5)

// console.log(n4)

// // = - atribuição
// // == - comparação com coerção implícita
// // === - comparação sem coerção implícita

// console.log('\nComparações')
// const nx = 1
// console.log('nx = ' + nx)
// console.log('nx == "1" : ' + (nx == '1'))
// console.log('nx === "1" : ' + (nx === '1'))

// console.log('\nArrays')
// const v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// v1[2] = "abc"
// v1[10] = 2
// console.log(v1.length)
// for (let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }

// const nomes = [
//     "Ana Maria",
//     "Antonio",
//     "Rodrigo",
//     "Alex",
//     "Cristina"
// ]

// filter(funcao){
    // funcao()
// }

// arrow function
// () => { }

// console.log(
// nomes.filter((n) => {
//     return n.startsWith('A')
// })
// )

// console.log(
//     nomes.map((n) => {
//     return n.charAt(0)
// })
// )

// console.log(
//     nomes.every((n) => {
//     return n.startsWith('A')
// })
// )

// const  val = [1, 2, 3, 4]
// const soma = val.reduce((ac, atual) => {
//     return ac + atual
// })
// console.log(soma)

