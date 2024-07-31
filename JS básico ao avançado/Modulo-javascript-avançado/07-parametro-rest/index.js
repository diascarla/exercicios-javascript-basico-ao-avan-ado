function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('Parabéns por ter chego ao módulo de JavaScript avançadp,', 'Carla', 'Miguel', 'David', 'Maria')