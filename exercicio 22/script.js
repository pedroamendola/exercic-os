function verificarTipoDeDado(dado) {

    if(typeof dado == 'string') {
        console.log("este dado é uma string");
    } else if(typeof dado == 'number') {
        console.log("Este dado é um number");
    
    } else if(typeof dado === 'boolean') {
        console.log("Este dado é um boolean");
    }
    
}

verificarTipoDeDado(true);
verificarTipoDeDado(23);
verificarTipoDeDado("teste");