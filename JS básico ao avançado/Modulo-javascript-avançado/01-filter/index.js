let pessoas = [
    {nome: 'Carla', idade: 34},
    {nome: 'David', idade: 37},
    {nome: 'Miguel', idade: 11},
]

// let pessoasComIdadeDe34Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 34){
//         pessoasComIdadeDe34Anos.push(pessoas[i])
//     }
// }

// console.log(pessoasComIdadeDe34Anos)

let pessoasComIdadeDe34Anos = pessoas.filter((pessoa) => pessoa.idade === 34)

console.log(pessoasComIdadeDe34Anos)