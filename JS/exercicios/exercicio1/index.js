function Calcular(){
    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado = document.getElementById("resultado");
    

    if(operacao === "+"){
        resultado.innerText = num1 + num2;
    }

    else if(operacao == "-"){
        resultado.innerText = num1 - num2;
    }
    else if(operacao == "*"){
        resultado.innerText = num1 * num2;
    }
    else if(operacao == "/"){
        resultado.innerText = num1 / num2;
    }
}

