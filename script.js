const produtos = {
    bebidas: [
      { nome: "Coca-Cola 2L", preco: 12.99, img: "https://static.clubeextra.com.br/img/uploads/1/1/25295001.png", quantidade: "2L" },
      { nome: "Pepsi 2L", preco: 11.49, img: "https://static.paodeacucar.com/img/uploads/1/658/26944658.jpg", quantidade: "2L" },
      { nome: "Guaraná Antarctica 1.5L", preco: 6.19, img: "https://static.clubeextra.com.br/img/uploads/1/16/33149016.jpg", quantidade: "1.5L" },
      { nome: "Fanta Uva 2L", preco: 8.29, img: "https://static.paodeacucar.com/img/uploads/1/295/24981295.png", quantidade: "2L" },
      { nome: "Suco Natural 1L", preco: 12.99, img: "https://www.natone.com.br/wp-content/uploads/2024/09/SUCO_DE_LARANJA_INTEGRAL_2L_REFRIGERADO_GARRAFA_RECICLAVEL_-_NATURAL_ONE-01.webp", quantidade: "1L" },
      { nome: "Energético Red Bull 473ml", preco: 16.99, img: "https://www.oxxo.com.br/ccstore/v1/images/?source=/file/v219502384197085265/products/96.product_96_energeticoredbulllata473ml_3737.jpg&height=100&width=100&outputFormat=JPEG", quantidade: "473ml" },
      { nome: "Água Mineral 500ml", preco: 4.50, img: "https://imgs.extra.com.br/1564306560/1xg.jpg?imwidth=500", quantidade: "500ml" },
      { nome: "Guaraná Antarctica 2L", preco: 11.50, img: "https://imgs.extra.com.br/1505923720/1xg.jpg?imwidth=500", quantidade: "2L" },
      { nome: "Pepsi Twist 2L", preco: 10.49, img: "https://static.paodeacucar.com/img/uploads/1/576/32844576.jpg", quantidade: "2L" },
      { nome: "Schin 2L", preco: 9.99, img: "https://www.sondadelivery.com.br/img.aspx/sku/85880/530/85880.jpg", quantidade: "2L" },
      { nome: "Coca-Cola Zero 2L", preco: 13.99, img: "https://andinacocacola.vtexassets.com/arquivos/ids/158596-1600-auto?v=638703090705600000&width=1600&height=auto&aspect=true", quantidade: "2L" },
      { nome: "Fanta Laranja 2L", preco: 8.79, img: "https://picsum.photos/seed/FantaLaranja/400", quantidade: "2L" },
      { nome: "Sukita Laranja 2L", preco: 8.49, img: "https://picsum.photos/seed/SukitaLaranja/400", quantidade: "2L" },
      { nome: "Coca-Cola Diet 1.5L", preco: 9.50, img: "https://picsum.photos/seed/CocaDiet1.5/400", quantidade: "1.5L" },
      { nome: "Água com Gás 500ml", preco: 5.00, img: "https://picsum.photos/seed/AguaComGas/400", quantidade: "500ml" }
    ],
    matinais: [
      { nome: "Leite Integral 1L", preco: 6.50, img: "https://picsum.photos/seed/LeiteIntegral/400", quantidade: "1L" },
      { nome: "Cereal Matinal 300g", preco: 8.20, img: "https://picsum.photos/seed/CerealMatinal/400", quantidade: "300g" },
      { nome: "Pão de Forma 500g", preco: 10.30, img: "https://picsum.photos/seed/PaodeForma/400", quantidade: "500g" },
      { nome: "Manteiga 200g", preco: 10.99, img: "https://picsum.photos/seed/Manteiga200/400", quantidade: "200g" },
      { nome: "Geleia de Morango 300g", preco: 14.99, img: "https://picsum.photos/seed/GeleiaMorango/400", quantidade: "300g" },
      { nome: "Queijo Minas 500g", preco: 20.50, img: "https://picsum.photos/seed/QueijoMinas/400", quantidade: "500g" },
      { nome: "Presunto 200g", preco: 17.99, img: "https://picsum.photos/seed/Presunto200/400", quantidade: "200g" },
      { nome: "Ovos - 12 unidades", preco: 18.00, img: "https://picsum.photos/seed/Ovos12/400", quantidade: "12 unidades" },
      { nome: "Margarina 500g", preco: 7.50, img: "https://picsum.photos/seed/Margarina500/400", quantidade: "500g" },
      { nome: "Achocolatado 400g", preco: 10.90, img: "https://picsum.photos/seed/Achocolatado400/400", quantidade: "400g" },
      { nome: "Biscoito Recheado 400g", preco: 9.50, img: "https://picsum.photos/seed/BiscoitoRecheado/400", quantidade: "400g" },
      { nome: "Creme de Leite 200g", preco: 4.50, img: "https://picsum.photos/seed/CremeLeite200/400", quantidade: "200g" },
      { nome: "Farinha de Trigo 1kg", preco: 6.20, img: "https://picsum.photos/seed/FarinhaTrigo/400", quantidade: "1kg" },
      { nome: "Requeijão 200g", preco: 7.80, img: "https://picsum.photos/seed/Requeijao200/400", quantidade: "200g" },
      { nome: "Biscoito de Polvilho 500g", preco: 8.99, img: "https://picsum.photos/seed/BiscoitoPolvilho/400", quantidade: "500g" },
      { nome: "Iogurte Natural 170g", preco: 3.50, img: "https://picsum.photos/seed/IogurteNatural/400", quantidade: "170g" }
    ],
    mercearia: [
      { nome: "Arroz 5kg", preco: 19.99, img: "https://picsum.photos/seed/Arroz5kg/400", quantidade: "5kg" },
      { nome: "Feijão 1kg", preco: 7.99, img: "https://picsum.photos/seed/Feijao1kg/400", quantidade: "1kg" },
      { nome: "Macarrão 500g", preco: 4.99, img: "https://picsum.photos/seed/Macarrao500/400", quantidade: "500g" },
      { nome: "Óleo de Soja 900ml", preco: 8.99, img: "https://picsum.photos/seed/OleoSoja900/400", quantidade: "900ml" },
      { nome: "Açúcar 1kg", preco: 3.99, img: "https://picsum.photos/seed/Acucar1kg/400", quantidade: "1kg" },
      { nome: "Sal Refinado 1kg", preco: 2.99, img: "https://picsum.photos/seed/SalRefinado1kg/400", quantidade: "1kg" },
      { nome: "Café Torrado 500g", preco: 15.99, img: "https://picsum.photos/seed/CafeTorrado500/400", quantidade: "500g" },
      { nome: "Farinha de Milho 1kg", preco: 4.99, img: "https://picsum.photos/seed/FarinhaMilho1kg/400", quantidade: "1kg" },
      { nome: "Molho de Tomate 350g", preco: 5.99, img: "https://picsum.photos/seed/MolhoTomate350/400", quantidade: "350g" },
      { nome: "Extrato de Tomate 200g", preco: 4.49, img: "https://picsum.photos/seed/ExtratoTomate200/400", quantidade: "200g" },
      { nome: "Leite em Pó 1kg", preco: 12.99, img: "https://picsum.photos/seed/LeiteEmPo1kg/400", quantidade: "1kg" },
      { nome: "Amido de Milho 500g", preco: 3.99, img: "https://picsum.photos/seed/AmidoMilho500/400", quantidade: "500g" },
      { nome: "Achocolatado em Pó 500g", preco: 9.99, img: "https://picsum.photos/seed/Achocolatado500/400", quantidade: "500g" },
      { nome: "Maionese 500g", preco: 7.99, img: "https://picsum.photos/seed/Maionese500/400", quantidade: "500g" },
      { nome: "Molho de Pimenta 200ml", preco: 6.99, img: "https://picsum.photos/seed/MolhoPimenta200/400", quantidade: "200ml" },
      { nome: "Mix de Temperos 100g", preco: 4.99, img: "https://picsum.photos/seed/MixTemperos100/400", quantidade: "100g" }
    ],
    hortifrute: [
      { nome: "Banana 1kg", preco: 3.99, img: "https://picsum.photos/seed/Banana1kg/400", quantidade: "1kg" },
      { nome: "Maçã 1kg", preco: 5.49, img: "https://picsum.photos/seed/Maca1kg/400", quantidade: "1kg" },
      { nome: "Tomate 1kg", preco: 4.99, img: "https://picsum.photos/seed/Tomate1kg/400", quantidade: "1kg" },
      { nome: "Cenoura 1kg", preco: 3.49, img: "https://picsum.photos/seed/Cenoura1kg/400", quantidade: "1kg" },
      { nome: "Alface", preco: 2.99, img: "https://picsum.photos/seed/Alface/400", quantidade: "unidade" },
      { nome: "Laranja 1kg", preco: 4.49, img: "https://picsum.photos/seed/Laranja1kg/400", quantidade: "1kg" },
      { nome: "Uva 1kg", preco: 6.99, img: "https://picsum.photos/seed/Uva1kg/400", quantidade: "1kg" },
      { nome: "Pera 1kg", preco: 5.99, img: "https://picsum.photos/seed/Pera1kg/400", quantidade: "1kg" },
      { nome: "Morango 500g", preco: 7.99, img: "https://picsum.photos/seed/Morango500/400", quantidade: "500g" },
      { nome: "Abacaxi", preco: 8.99, img: "https://picsum.photos/seed/Abacaxi/400", quantidade: "unidade" },
      { nome: "Kiwi 500g", preco: 9.99, img: "https://picsum.photos/seed/Kiwi500/400", quantidade: "500g" },
      { nome: "Manga 1kg", preco: 6.99, img: "https://picsum.photos/seed/Manga1kg/400", quantidade: "1kg" },
      { nome: "Abobrinha 1kg", preco: 4.99, img: "https://picsum.photos/seed/Abobrinha1kg/400", quantidade: "1kg" },
      { nome: "Berinjela 1kg", preco: 5.99, img: "https://picsum.photos/seed/Berinjela1kg/400", quantidade: "1kg" },
      { nome: "Pimentão 1kg", preco: 7.49, img: "https://picsum.photos/seed/Pimentao1kg/400", quantidade: "1kg" },
      { nome: "Batata 5kg", preco: 9.99, img: "https://picsum.photos/seed/Batata5kg/400", quantidade: "5kg" }
    ],
    acougue: [
      { nome: "Bife de Contra Filé 500g", preco: 39.99, img: "https://picsum.photos/seed/ContraFile500/400", quantidade: "500g" },
      { nome: "Carne Moída 500g", preco: 29.99, img: "https://picsum.photos/seed/CarneMoida500/400", quantidade: "500g" },
      { nome: "Costela 1kg", preco: 49.99, img: "https://picsum.photos/seed/Costela1kg/400", quantidade: "1kg" },
      { nome: "Frango Inteiro 1.5kg", preco: 19.99, img: "https://picsum.photos/seed/FrangoInteiro1.5/400", quantidade: "1.5kg" },
      { nome: "Filé de Frango 500g", preco: 24.99, img: "https://picsum.photos/seed/FileFrango500/400", quantidade: "500g" },
      { nome: "Picanha 1kg", preco: 69.99, img: "https://picsum.photos/seed/Picanha1kg/400", quantidade: "1kg" },
      { nome: "Linguiça 500g", preco: 19.99, img: "https://picsum.photos/seed/Linguica500/400", quantidade: "500g" },
      { nome: "Coxa de Frango 1kg", preco: 14.99, img: "https://picsum.photos/seed/CoxaFrango1kg/400", quantidade: "1kg" },
      { nome: "Sobrecoxa 1kg", preco: 15.99, img: "https://picsum.photos/seed/Sobrecoxa1kg/400", quantidade: "1kg" },
      { nome: "Filé Mignon 500g", preco: 49.99, img: "https://picsum.photos/seed/FileMignon500/400", quantidade: "500g" },
      { nome: "Bisteca Suína 500g", preco: 29.99, img: "https://picsum.photos/seed/BistecaSuina500/400", quantidade: "500g" },
      { nome: "Costelinha de Porco 1kg", preco: 39.99, img: "https://picsum.photos/seed/CostelinhaPorco1kg/400", quantidade: "1kg" },
      { nome: "Alcatra 1kg", preco: 34.99, img: "https://picsum.photos/seed/Alcatra1kg/400", quantidade: "1kg" },
      { nome: "Cupim 1kg", preco: 32.99, img: "https://picsum.photos/seed/Cupim1kg/400", quantidade: "1kg" },
      { nome: "Patinho 500g", preco: 27.99, img: "https://picsum.photos/seed/Patinho500/400", quantidade: "500g" },
      { nome: "Maminha 1kg", preco: 36.99, img: "https://picsum.photos/seed/Maminha1kg/400", quantidade: "1kg" }
    ],
    congelados: [
      { nome: "Pizza Congelada", preco: 14.99, img: "https://picsum.photos/seed/PizzaCongelada/400", quantidade: "unidade" },
      { nome: "Legumes Congelados 1kg", preco: 9.99, img: "https://picsum.photos/seed/LegumesCongelados/400", quantidade: "1kg" },
      { nome: "Frango Empanado 500g", preco: 16.99, img: "https://picsum.photos/seed/FrangoEmpanado/400", quantidade: "500g" },
      { nome: "Sorvete 500ml", preco: 12.99, img: "https://picsum.photos/seed/Sorvete500/400", quantidade: "500ml" },
      { nome: "Hambúrguer Congelado 4un", preco: 19.99, img: "https://picsum.photos/seed/HamburguerCongelado/400", quantidade: "4 unidades" },
      { nome: "Batata Frita Congelada 1kg", preco: 14.99, img: "https://picsum.photos/seed/BatataFritaCongelada/400", quantidade: "1kg" },
      { nome: "Peixe Congelado 1kg", preco: 24.99, img: "https://picsum.photos/seed/PeixeCongelado/400", quantidade: "1kg" },
      { nome: "Empanadas Congeladas 500g", preco: 17.99, img: "https://picsum.photos/seed/EmpanadasCongeladas/400", quantidade: "500g" },
      { nome: "Arroz Parboilizado Congelado 1kg", preco: 11.99, img: "https://picsum.photos/seed/ArrozParboilizadoCongelado/400", quantidade: "1kg" },
      { nome: "Lasanha Congelada 1kg", preco: 19.99, img: "https://picsum.photos/seed/LasanhaCongelada/400", quantidade: "1kg" },
      { nome: "Nuggets de Frango 500g", preco: 15.99, img: "https://picsum.photos/seed/NuggetsFrango/400", quantidade: "500g" },
      { nome: "Legumes Mistos Congelados 1kg", preco: 10.99, img: "https://picsum.photos/seed/LegumesMistosCongelados/400", quantidade: "1kg" },
      { nome: "Mini Pastéis Congelados 500g", preco: 13.99, img: "https://picsum.photos/seed/MiniPasteisCongelados/400", quantidade: "500g" },
      { nome: "Quibe Congelado 500g", preco: 12.99, img: "https://picsum.photos/seed/QuibeCongelado/400", quantidade: "500g" },
      { nome: "Pão de Queijo Congelado 500g", preco: 14.99, img: "https://picsum.photos/seed/PaodeQueijoCongelado/400", quantidade: "500g" },
      { nome: "Crepioca Congelada 500g", preco: 16.99, img: "https://picsum.photos/seed/CrepiocaCongelada/400", quantidade: "500g" }
    ],
    padaria: [
      { nome: "Pão Francês", preco: 0.50, img: "https://picsum.photos/seed/Paofrances/400", quantidade: "unidade" },
      { nome: "Croissant", preco: 3.99, img: "https://picsum.photos/seed/Croissant/400", quantidade: "unidade" },
      { nome: "Bolo de Fubá 1kg", preco: 14.99, img: "https://picsum.photos/seed/Bolofuba/400", quantidade: "1kg" },
      { nome: "Muffin", preco: 2.99, img: "https://picsum.photos/seed/Muffin/400", quantidade: "unidade" },
      { nome: "Pão Integral 500g", preco: 6.99, img: "https://picsum.photos/seed/Paointegral/400", quantidade: "500g" },
      { nome: "Pão de Queijo 500g", preco: 8.99, img: "https://picsum.photos/seed/Paodequeijo/400", quantidade: "500g" },
      { nome: "Bolo de Chocolate 1kg", preco: 19.99, img: "https://picsum.photos/seed/Bolochocolate/400", quantidade: "1kg" },
      { nome: "Pão de Forma Integral 500g", preco: 7.99, img: "https://picsum.photos/seed/Paodeformaintegral/400", quantidade: "500g" },
      { nome: "Rosca de Canela", preco: 4.99, img: "https://picsum.photos/seed/Roscadecanela/400", quantidade: "unidade" },
      { nome: "Pão Italiano 500g", preco: 8.99, img: "https://picsum.photos/seed/PaoItaliano/400", quantidade: "500g" },
      { nome: "Donuts (4un)", preco: 5.99, img: "https://picsum.photos/seed/Donuts/400", quantidade: "4 unidades" },
      { nome: "Baguete Francesa", preco: 6.99, img: "https://picsum.photos/seed/Baguete/400", quantidade: "unidade" },
      { nome: "Pão de Milho 500g", preco: 7.99, img: "https://picsum.photos/seed/Paodemilho/400", quantidade: "500g" },
      { nome: "Cupcake", preco: 2.99, img: "https://picsum.photos/seed/Cupcake/400", quantidade: "unidade" },
      { nome: "Focaccia 500g", preco: 8.99, img: "https://picsum.photos/seed/Focaccia/400", quantidade: "500g" },
      { nome: "Pão Sírio 300g", preco: 4.99, img: "https://picsum.photos/seed/Paosirio/400", quantidade: "300g" }
    ],
    limpeza: [
      { nome: "Detergente Líquido 500ml", preco: 3.99, img: "https://picsum.photos/seed/DetergenteLiquido/400", quantidade: "500ml" },
      { nome: "Desinfetante 1L", preco: 5.99, img: "https://picsum.photos/seed/Desinfetante/400", quantidade: "1L" },
      { nome: "Sabão em Pó 1kg", preco: 8.99, img: "https://picsum.photos/seed/SabaoemPo/400", quantidade: "1kg" },
      { nome: "Multiuso 500ml", preco: 4.99, img: "https://picsum.photos/seed/Multiuso/400", quantidade: "500ml" },
      { nome: "Limpador de Vidros 500ml", preco: 5.99, img: "https://picsum.photos/seed/LimpadordeVidros/400", quantidade: "500ml" },
      { nome: "Álcool em Gel 500ml", preco: 6.99, img: "https://picsum.photos/seed/AlcoolemGel/400", quantidade: "500ml" },
      { nome: "Esponja de Limpeza", preco: 2.99, img: "https://picsum.photos/seed/EsponjadeLimpeza/400", quantidade: "unidade" },
      { nome: "Desengordurante 1L", preco: 7.99, img: "https://picsum.photos/seed/Desengordurante/400", quantidade: "1L" },
      { nome: "Amaciante de Roupas 1L", preco: 6.99, img: "https://picsum.photos/seed/AmacianteRoupas/400", quantidade: "1L" },
      { nome: "Sabão em Barra 200g", preco: 2.99, img: "https://picsum.photos/seed/SabaoemBarra/400", quantidade: "200g" },
      { nome: "Removedor de Manchas 500ml", preco: 5.99, img: "https://picsum.photos/seed/RemovedordeManchas/400", quantidade: "500ml" },
      { nome: "Limpa Piso 1L", preco: 4.99, img: "https://picsum.photos/seed/Limpapiso/400", quantidade: "1L" },
      { nome: "Limpa Móveis 500ml", preco: 5.99, img: "https://picsum.photos/seed/Limpamoveis/400", quantidade: "500ml" },
      { nome: "Desinfetante Multiuso 1L", preco: 6.99, img: "https://picsum.photos/seed/DesinfetanteMultiuso/400", quantidade: "1L" },
      { nome: "Sabão Líquido para Roupas 1L", preco: 6.99, img: "https://picsum.photos/seed/SabaoLiquidoRoupas/400", quantidade: "1L" },
      { nome: "Limpa Ar 500ml", preco: 4.99, img: "https://picsum.photos/seed/Limpaar/400", quantidade: "500ml" }
    ]
  };
  
  let carrinho = [];
  
  function showSection(sectionId) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    produtos[sectionId].forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.nome}">
        <h3>${product.nome}</h3>
        <p>${product.quantidade}</p>
        <p>R$ ${product.preco.toFixed(2)}</p>
        <button onclick="addToCart('${product.nome}', ${product.preco})">Adicionar</button>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  function addToCart(nome, preco) {
    const produtoCarrinho = carrinho.find(item => item.nome === nome);
    if (produtoCarrinho) {
      produtoCarrinho.quantidade += 1;
    } else {
      carrinho.push({ nome, preco, quantidade: 1 });
    }
    updateCart();
  }
  
  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let totalPreco = 0;
    carrinho.forEach(item => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");
      cartItemDiv.innerHTML = `
        <span>${item.nome} (x${item.quantidade})</span>
        <strong>R$ ${(item.preco * item.quantidade).toFixed(2)}</strong>
        <button onclick="removeFromCart('${item.nome}')">Remover</button>
      `;
      cartItems.appendChild(cartItemDiv);
      totalPreco += item.preco * item.quantidade;
    });
    document.getElementById("total").textContent = totalPreco.toFixed(2);
    document.getElementById("checkout").disabled = carrinho.length === 0;
    document.getElementById("pagamento").style.display = carrinho.length > 0 ? "block" : "none";
  }
  
  function removeFromCart(nome) {
    carrinho = carrinho.filter(item => item.nome !== nome);
    updateCart();
  }
  
  document.getElementById("checkout").addEventListener("click", () => {
    if (carrinho.length > 0) {
      alert("Carrinho finalizado! Agora prossiga para o pagamento.");
    }
  });
  
  document.getElementById("pagamento").addEventListener("click", () => {
    document.getElementById("modalPagamento").style.display = "flex";
  });
  
  function realizarPagamento() {
    alert("Pagamento realizado com sucesso!");
    carrinho = [];
    updateCart();
    fecharModal();
  }
  
  function fecharModal() {
    document.getElementById("modalPagamento").style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showSection("bebidas");
  });
  