function tabuada(){
    let numero = Number((document.querySelector('input#start')).value)
    let resultado = document.querySelector('#resultado')
    resultado.size = resultado.length
    

    for (let i = 1 ; i <= 10 ; i++){
        // Create Element para criar as options 
        resultado.options[resultado.options.length] = new Option(`${numero} * ${i} = ${numero * i}`)
    }
}