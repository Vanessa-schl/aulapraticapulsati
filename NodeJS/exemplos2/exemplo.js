var teste1 = 'teste 1';
let teste2 = 'teste 2';
const teste3 = 'teste 3';

console.log(teste1);
console.log(teste2);
console.log(teste3);

console.log("========================================");

let a = '1';
let b = 1;
let c = function(){console.log("a")}

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(a+a);
console.log(b+b);

console.log("==================operadores======================");

console.log(a==a);
console.log(b==b);
console.log(a==b);
console.log(a===b);
console.log(a && b);
console.log(a || b);

console.log("========================================");

console.log(!! a); // verificar tbm
console.log(!a); //verificar se há valor dentro da variavel
console.log(a == null || a == undefined); //poderia ser feito com o notnot ("")
console.log(a == undefined); // poderia ser feito com o notnot ("")

console.log("========================================");

function teste19(){
    console.log('funciontion 1');
    let a = 'novo a'; // se eu declarar dentro da function, o valor só fica dentro dela.
}

let teste20 = function(){
    console.log("funciontion 2")
}

teste19();
teste20();


console.log("====================objetos====================");

let e = 'e';
let obj = {a: 1, b:2};
obj['c'] = 3;
obj.d = 4;
obj[e] = 5;
console.log(obj)

console.log("====================clousers====================");



function novoUsuario(nome, idade){
    return{
        dados : {
            namo: nome,
            idade: idade
        }.
        setNome = function(novoUsuario){
            if(novoNome){
            this.dados.nome = novoNome;
            }
        }
    }
}

const u = novoUsuario('ana', 25);
console.log(u);
u.setNome('jose');
console.log(u);


console.log("===============imput ============")
//requiere = carregar uma biblioteza
const readline = require('readline').createInterface({
    imput: process.stdin,
    output: process.stdout
});

readline.question("quem é voce?", name =>{
    console.log(`ola ${name}!`);
    readline.close();
});
