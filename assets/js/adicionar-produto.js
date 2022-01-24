const adicionarProduto = () => {
  document.querySelector("#sacola").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
  document.getElementById("modal-produto").style.display = "none";
  increment();
};

const closeModal = () => {
  document.querySelector("body").style.overflowY = "scroll";
  document.getElementById("modal-produto").style.display = "none";
};

const increment = () => {
  let contador = document.getElementsByClassName(".circle");
  let numero = Number.parseInt(contador.textContent) + 1;
  contador.textContent = numero;
};
