function colocarAguaParaFerver(){
    console.log('Colocar água para ferver')
}

setTimeout(() => {
    console.log('água ferveu')
    passarOCafe()
}, 5000)

function preparaParaPassarOCafe(){
    console.log('Pegar o pó de café')
    console.log('Pegar o filtro de café')
    console.log('Colocar o café no filtro')
    console.log('Colocar o filtro em cima da xícara')
}

function passarOCafe(){
    console.log('Passar o café')
}

colocarAguaParaFerver()
preparaParaPassarOCafe()
