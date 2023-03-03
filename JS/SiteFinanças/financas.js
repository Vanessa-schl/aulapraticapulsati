let tbody = document.querySelector("tbody");
let descItem = document.querySelector("#desc");
let amount = document.querySelector("#amount");
let type = document.querySelector("#type");
let btnNew = document.querySelector("#btnNew");

let incomes = document.querySelector(".entrada");
let expenses = document.querySelector(".saida");
let total = document.querySelector(".total");

let items;

btnNew.onclick = function () {
    if(descItem.value === "" || amount.value === "" || type.value === ""){
        return alert("Preencha todas as informações!")
    }

    items.push({
        desc: descItem.value,
        amount: Math.abs(amount.value).toFixed(2),
        type: type.value,
});

    setItensDB();
    loadItens();

    descItem.value = "";
    amount.value = "";
    
}

function deleteItem(item){
    items.splice(index,1);
    setItensDB();
    loadItens();
}

function insertItem(item,index) {
    let ol = document.createElement("ol");

    ol.innerHTML =`
        <li>${item.desc}</li>
        <li>R$ ${item.amount}</li>
        <li class="columnType">${
            item.type === "entrada"
            ?'<i class = "bx bxs-chevron-up-circle"></i>'
            :'<i class = "bx bxs-chevron-down-circle"></i>'
        } </li>
        <li class ="columnAction">
            <button onclick= "deleteItem(${index})"><i class="bx bx-trash"></button>
        </li>
    `;
    tbody.appendChild(ol)
}

function loadItens(){
    items = getItensDB();
    tbody.innerHTML = "";
    items.forEach((item,index) => {
        insertItem(item,index);
    });
    getTotals();
}

function getTotals(){
    let amountIncomes = items
    .filter((item) => item.type === "entrada")
    .map((transaction) => Number(transaction.amount));

    let amountExpenses = items
    .filter((item) => item.type === "saida")
    .map((transaction) => Number(transaction.amount));

    let totalIncomes = amountIncomes
        .reduce((acc, cur) => acc + cur, 0)
        .tofixed(2);

    let totalExpenses = Math.abs(amountExpenses.reduce((acc, cur) => acc + cur, 0))
    .toFixed(2);

    let totalItems = (totalIncomes - totalExpenses).toFixed(2);
    
    incomes.innerHTML = totalIncomes;
    incomes.innerHTML = totalExpenses;
    total.innerHTML = totalItems;

}

let getItensDB = () => JSON.parse(localStorage.getItem("db_items")) ?? [];

let setItensDB = () => localStorage.setItem("db_items", JSOn.stringify(items));

loadItens();



