function tabuada(){

    let numero = Number((document.querySelector('input#start')).value)
    let div = document.querySelector('#formDiv')
    let button = document.querySelector('#criar')
    let resultado = document.querySelector('#resultado')
    let optTemporaria = document.querySelector('#temp')
    let input = document.querySelector('#start')

    resultado.removeChild(optTemporaria)
    resultado.setAttribute('size', '10')


    for (let i = 1 ; i <= 10 ; i++){
        let newOpt = document.createElement('option')

        let texto = `${numero} * ${i} = ${numero * i}`

        resultado.appendChild(newOpt)

        newOpt.setAttribute('value', `${i}`)

        newOpt.innerHTML = texto

        //Estudar a seguinte alternativa em casa:

        /* resultado.options[resultado.options.length] = new Option(`${numero} * ${i} = ${numero * i}`) */
    }

    let refresh = document.createElement('button')
    div.removeChild(button)

    refresh.setAttribute("onclick", "window.location.reload()")
    refresh.innerHTML = "Novo Cálculo"
    div.appendChild(refresh)
    input.setAttribute('disabled', '')
    
}