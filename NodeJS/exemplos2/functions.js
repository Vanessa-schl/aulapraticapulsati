console.log("valor padrao para parametros");

function nomeUsuario(...nomes){
    console.log(nomes);
}

//===== rest parameters
function soma(...numeros){
    console.log(numeros[0]+numeros[1]);
}

function soma1(numero0, numero1, ...numeros){
    console.log(numero0 + numero1 + numeros[0] + numeros[1]);
}

nomeUsuario('vanessa', 'schç', 'de', 'silva');
nomeUsuario("VANESSA");
soma(1,1);
soma1(1,1,2,3);


////==================arrow functions ==============

function nomeUsuario2(...nomes){
    console.log(nomes);
}

nomeUsuario2 = (...nomes) => { //essa setinha é a arrow function, ele acessa tudo do que a function normal
    console.log(nomes); // exemplo das caixas, o normal tem a caixa grande e a caixa pequena dentro, a caixa grande n acessa a pequena, mas a pequena sim
} // como arrow function, n tem a caixa pequena, fica tudo em uma só caixa
console.log(a);

//================ destructing parameters ===============

const imprimeNome = (objeto) =>{
    const {nome, sobrenome} = objeto;
    console.log(nome, sobrenome)
}

const imprimeNome2 = ({nome, sobrenome = "nao informado", ultimoNome = "nao informado"}) =>{
    console.log(nome,sobrenome,ultimoNome);
} //um outro jeito de fazer a function, ja colocando quie se caso n for informado os nomes, vai aparecer a mensagem

imprimeNome({nome: "vanessa", sobrenome: "schl"});

//====================STRING TEMPLATE

const imprimeNome3 = ({nome, sobrenome = "nao informado"}) => {
   // console.log(nome + sobrenome) -- faziamos a concatenacao assim
   console.log(`${nome}${sobrenome}`) // assim podemos fazer a concatenacao = essa é a string template
}

imprimeNome3({nome: "vanessssa", sobrenome: "schl"});