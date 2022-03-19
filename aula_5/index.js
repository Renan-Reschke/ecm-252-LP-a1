// Async / Await

function hello (nome){
    return `Hello ${nome}`
}

const rs = hello("Joao")
console.log(rs)

// Transformando em promisse
function helloP (nome){
    return new Promise(function(resolve, reject){
        resolve(`Hello ${nome}`)
    })
}

helloP("Joao").then((rs) => console.log(rs))

// Transformando em async
async function helloA (nome){
    return `Hello ${nome}`
}

helloA("Joao").then(rs => console.log(rs))

function fatorial (n){
    if (n<0) return Promise.reject("n deve ser > 0")
    let res = 1
    for (let i = 1; i<=n; i++) res *= i
    return Promise.resolve(res)
}

async function chamadaComAsyncAwait(){
    try{
        const f1 = await fatorial(10)
        console.log(f1)
        const f2 = await fatorial(-10)
        console.log(f2)
    }
    catch(e){
        console.log(e)
    }    
}

chamadaComAsyncAwait()