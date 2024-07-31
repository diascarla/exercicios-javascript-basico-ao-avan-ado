const calcularValorPedido = require('./calcular-valor-pedido');

it('Não deve cobrar valor de frete quando valor dos produtos for superior a 500', () => {

    //AAA - arrange , act e assert

    //arrange - arrumar - o objeto de teste
    const meuPedido = {
        itens: [
            {nome: 'calça jeans', valor: 2000},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    //act - ação - o que vai ser testado
    const resultado = calcularValorPedido(meuPedido)

    //assert - asserção - o resultado esperado
    expect(resultado).toBe(2000)
});

it('Deve cobrar valor de frete quando o valor dos produtos dorem menor que 500', () => {
    const meuPedido = {
        itens: [
            {nome: 'sanduiche', valor: 50},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(150);
});

it('Deve cobrar valor de frete caso valor dos produtos seja EXATAMENTE 500', () => {
    const meuPedido = {
        itens: [
            {nome: 'sanduiche bem caro', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600);
});

// Caso os estados de entrega sejam RS ou SC, deve ser acrescido um valor de 20% na entrega

it('deve adicionar um acrescimo de 20% no valora da entrega do pedido caso o estado seja RS', () => {
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            {nome: 'sanduiche bem caro', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRS);

    expect(resultado).toBe(620);

})

it('deve adicionar um acrescimo de 20% no valora da entrega do pedido caso o estado seja SC', () => {
    const pedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            {nome: 'sanduiche bem caro', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSC);

    expect(resultado).toBe(620);

})

it('não deve adicionar um acrescimo de 20% no valora da entrega do pedido caso o estado seja SP', () => {
    const pedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            {nome: 'sanduiche bem caro', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSP);

    expect(resultado).toBe(600);

})

