// Closure
// function f(){
//     let nome = 'Joao'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

// Devolver nova coleçao
// que possui todos os elementos 
// de v que fazem com que f produza true
function filter (v, f){
    let ret = []
    v.forEach((v) => {if (f(v) === true) ret.push(v)})
    return ret
}

console.log(filter([1, 2, 3], e => e%2 === 0))


// Produzir uma coleção nova
// que, pra cada elemento v[i]
// possui o valor resultante de f(v[i])
function map (v, f){
    let ret = []
    v.forEach((v) => ret.push(f(v)))
    return ret
}

console.log(map(['abcd', 'abc'], e => e.length))

