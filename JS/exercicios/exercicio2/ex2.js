function resultado(){
    let numero = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");
    let res = document.createElement("p");

    
    for(let i = 1; i <= 10; i++){
        res.innerHTML += numero + ' vezes ' + i + '=' + (numero*i) + "<br>";
    }

    resultado.appendChild(res);
}