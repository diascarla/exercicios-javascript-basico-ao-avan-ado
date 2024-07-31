const acrescimoValorEntrega = 0.2;

const calcularValorPedido = pedido => {
    const valorProduto = pedido.itens
    .filter((item) => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);

    const entrega = pedido.itens.filter((item) => item.entrega);

    if(pedido.estado === 'RS' || pedido.estado === 'SC'){
        const acrescimoEntrega = entrega[0].valor * acrescimoValorEntrega;
        entrega[0].valor == acrescimoEntrega;
    }

    return (valorProduto > 500) ? valorProduto : valorProduto + entrega[0].valor;

}

module.exports = calcularValorPedido;