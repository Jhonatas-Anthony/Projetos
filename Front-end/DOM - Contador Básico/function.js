function contador() {
    let inicio = Number((document.querySelector('input#start')).value)
    let fim = Number((document.querySelector('input#end')).value)
    let incremento = Number((document.querySelector('input#increment')).value)
    let resultado = document.querySelector('div#resultado')

    for (let i = inicio ; i <= fim; i += incremento) {
        console.log(i)
    }
    console.log('fim')
}