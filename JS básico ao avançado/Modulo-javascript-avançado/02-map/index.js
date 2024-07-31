let pessoas = [
    {nome: 'Carla', idade: 34},
    {nome: 'David', idade: 37},
    {nome: 'Miguel', idade: 11},
]

// let nomeDasPessoas = []
// for(let i = 0; i < pessoas.length; i++){
//     nomeDasPessoas.push(pessoas[i].nome)
    
// }

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " têm " + pessoa.idade + " anos de idade")

console.log(nomeDasPessoas)