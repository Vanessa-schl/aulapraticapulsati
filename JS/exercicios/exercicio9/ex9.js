function tamanho(){
    let altura = window.innerHeight;
    let largura = window.innerWidth;
    
    let tamanhoTela = " sua tela tem " + largura + " pixel de largura e "
    + altura + " pixel de altura ";
    document.getElementById("tamanhoTela").innerHTML = tamanhoTela;
    
}