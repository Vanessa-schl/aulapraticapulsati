function mudarCor(){
    let opcao = document.getElementById('opcao').value;

    let div = document.getElementById('div');

    if(opcao == 'vermelho'){
    div.style.backgroundColor = 'red'; 
    }
    else if(opcao == 'verde'){
        div.style.backgroundColor = 'green';
    }
    else if(opcao == 'azul'){
        div.style.backgroundColor = 'blue';
    }
}