const comprarProdutos = () => {
  document.querySelector("body").style.overflow = "hidden";
  document.getElementById("modal-produto").style.display = "flex";
};

const closeBag = () => {
  document.getElementById("modal-produto").style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
  document.getElementById("sacola").style.display = "none";
};
