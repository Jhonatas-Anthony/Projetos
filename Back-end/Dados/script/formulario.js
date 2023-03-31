function mostrarDados() {
	const nome = document.querySelector("input#nome");
	const email = document.querySelector("input#email");
	
	window.location.href = `http://127.0.0.1:45445/Dados/infos.html?nome=${nome.value}&email=${email.value}`
}
//
