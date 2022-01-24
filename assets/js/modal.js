setTimeout(
  (modalNewsletter = () => {
    document.querySelector("#modal").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
  }),
  5000
);

const modalClose = () => {
  document.querySelector("#modal").style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
};

const cadastrarEmail = () => {
  let email = (localStorage.email = document.querySelector("#cadastrar").value);
  if (email === "") {
    alert("Ops...Digite o seu email...");
  } else {
    alert("Email recebido com sucesso!");
    document.querySelector("#modal").style.display = "none";
    document.querySelector("body").style.overflow = "scroll";
  }
  JSON.stringify(localStorage.email);
};

