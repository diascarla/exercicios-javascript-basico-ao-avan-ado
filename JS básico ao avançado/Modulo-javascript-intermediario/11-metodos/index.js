let usuario = {
    nome: 'Carla',
    excluir : function(){
        console.log('O usuário, ' + this.nome + ' foi excluído!');
    }
}

usuario.excluir()