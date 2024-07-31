// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 5
//     let anoDeNascimento = 2024 - idade
//     if(mesDeNascimento > mesAtual) mesDeNascimento--
//     imprimir(anoDeNascimento)

//     console.log(imprimir)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log("Seu ano de nascimento é: " + anoDeNascimento)
// }

// calcularAnoDeNascimento(34, 11, imprimirAnoDeNascimento)


// function dobrar(numero){
//     return numero * 2
// }

// console.log(dobrar(2))

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3));
console.log(triplicar(3));
console.log(quadruplicar(3));

