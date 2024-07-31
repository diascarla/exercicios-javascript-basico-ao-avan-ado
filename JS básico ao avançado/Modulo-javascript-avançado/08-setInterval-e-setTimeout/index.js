// setTimeout(() => {
//     alert('Olá mundo!')
// }, 2000);

// setTimeout(() =>{
//     console.log('console dentro do setTimeout')
// }, 3000);

// console.log('console depois do setTimeout')


let idDoIntervalo = setInterval(() =>{
    console.log('executand a cada 2 segundos')
}, 2000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)