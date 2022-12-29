function scroll() {
    let resultado = document.querySelector('div#resultado')

    console.log(resultado.clientHeight)

    if (resultado.clientHeight > 250){
        resultado.style.overflowY = "scroll";
    }
}


/* Element.clientHeight */