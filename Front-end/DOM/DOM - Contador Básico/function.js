function contador() {
    let inicio = Number((document.querySelector('input#start')).value)
    let fim = Number((document.querySelector('input#end')).value)
    let incremento = Number((document.querySelector('input#increment')).value)
    let resultado = document.querySelector('div#resultado')
    let lista = []

    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += incremento) {
            lista.push(i)
        }
    }

    else if (inicio > fim) {
        for (let i = inicio; i >= fim; i -= incremento) {
            lista.push(i)
        }
    }

    resultado.innerHTML = `Começando a contagem... ${"<br>"} ${lista.join(" 👉 ")} 👉 Fim 🏁`

    console.log(resultado.clientHeight)
}
