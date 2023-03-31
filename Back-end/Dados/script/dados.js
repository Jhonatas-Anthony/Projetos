let params = new URLSearchParams(window.location.search);
const nome = params.get("nome");
const email = params.get("email");

document.querySelector("span#nome").textContent = nome;
document.querySelector("span#email").textContent = email;