// const cartButton = document.getElementById("cart-button");
// const modal = document.getElementById("modal");
// const closeBtn = document.querySelector(".close");

// cartButton.addEventListener("click", function () {
//   modal.style.display = "block";
// });

// closeBtn.addEventListener("click", function () {
//   modal.style.display = "none";
// });

// window.addEventListener("click", function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });


// seleciona os botões "Adicionar ao carrinho"
const addButtons = document.querySelectorAll('.adicionar1, .adicionar2, .adicionar3, .adicionar4');

// seleciona o botão "Carrinho" e o modal
const cartButton = document.getElementById('cart-button');
const modal = document.getElementById('modal');

// cria uma lista vazia para armazenar os produtos adicionados pelo usuário
const cartItems = [];

// adiciona um evento de clique a cada botão "Adicionar ao carrinho"
addButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // cria um objeto com as informações do produto selecionado
    const product = {
      name: button.parentElement.querySelector(`.sabor${index+1}`).textContent,
      price: button.parentElement.querySelector(`.preço${index === 2 ? 1 : ''}`).textContent,
      quantity: 1
    };
    
    // verifica se o produto já foi adicionado ao carrinho
    const existingProduct = cartItems.find(item => item.name === product.name);
    if (existingProduct) {
      // se o produto já estiver no carrinho, incrementa a quantidade
      existingProduct.quantity++;
    } else {
      // se o produto ainda não estiver no carrinho, adiciona à lista
      cartItems.push(product);
    }

    // atualiza o conteúdo do modal com a lista de produtos e o valor total
    const modalContent = modal.querySelector('.modal-content');
    modalContent.innerHTML = '<span class="close">&times;</span><p>Lista de produtos:</p>';
    cartItems.forEach(item => {
      modalContent.innerHTML += `<p>${item.name} - ${item.price} x ${item.quantity}</p>`;
    });
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity, 0);
    modalContent.innerHTML += `<p>Total da compra: R$${total.toFixed(2)}</p>`;

    // exibe o modal
    modal.style.display = 'block';
    
    // adiciona um evento de clique ao botão "Fechar" do modal para escondê-lo
    modal.querySelector('.close').addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // adiciona um evento de clique ao botão "Adicionar ao carrinho" para fechar o modal
    modal.querySelector('.adicionar').addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
});

// adiciona um evento de clique ao botão "Carrinho" para exibir o modal
cartButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// adiciona um evento de clique ao botão "Adicionar ao carrinho" para fechar o modal
addButtons.forEach((button) => {
    button.addEventListener('click', () => {
    modal.style.display = 'none';
    });

modal.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
      });
});

