import { produtos } from "../models/produtos-4.js";

const sessionThree = () => {

var reinderizarProdutos = document.querySelector('.products-3');

  produtos.map((prod) => {

      reinderizarProdutos.innerHTML+=`
        <div class="coleiras" key="`+prod.id+`">
            <img src="`+prod.img+`" alt="coleira com mosquetão">
              <div class="coleiras-icon__heart" >
                  <img src="assets/imgs/header/wish.png" alt="favoritar produto">
              </div>
              <div class="coleiras-icon__car" onclick="comprarProdutos()">
                  <img src="assets/imgs/header/cart.png" alt="colocar produto no carrinho">
              </div>
              <div class="description">
                  <h1 class="title-product">`+prod.produto+`</h1>
                  <div class="stars"><img src="assets/imgs/product/rate.png" alt="favoritar com estrela"></div>
                  <div class="price"> <strong> R$ `+prod.preco+`</strong><strike class="price-back">R$ 35,00</strike> </div>
                  <button class="button" onclick="comprarProdutos()">Comprar</button>
              </div>
        </div>
        `
      });

};

sessionThree();

