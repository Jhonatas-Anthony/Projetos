function verificar() {
    //pegar elementos do input
    let datahj = new Date()
    let ano_atual = datahj.getFullYear()
    let ano_nasc = document.querySelector('input#age')
    let idade = datahj.getFullYear() - ano_nasc.value
    let resposta = document.querySelector('div#resultado')
    let img = document.createElement('img')
    img.setAttribute('id', 'imagem')
    let gender = document.querySelector('input[class="gender"]:checked').value

    if (ano_nasc = '' || (ano_nasc.value) > ano_atual) {
        alert("Algo deu errado, confira os dados e tente novamente :)")
    }
    else {
        if (gender === 'Homem') {
            if (idade >= 0 && idade <= 12) {
                img.setAttribute("src", "images/playtime.png")
            }
            else if (idade <= 18) {
                img.setAttribute('src', 'images/adolescencia.png')
            }
            else if (idade <= 30) {
                img.setAttribute('src', 'images/adolescente(1).png')
            }
            else if (idade <= 60) {
                img.setAttribute('src', 'images/adulto.png')
            }
            else if (idade <= 110) {
                img.setAttribute('src', 'images/homem.png')
            }
            else if (idade > 110) {
                img.setAttribute('src', 'images/esqueleto.png')
            }
        }
        else if (gender === 'Mulher') {
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'images/crianca.png')
            }
            else if (idade <= 18) {
                img.setAttribute('src', 'images/adolescente.png')
            }
            else if (idade <= 30) {
                img.setAttribute('src', 'images/girld.png')
            }
            else if (idade <= 60) {
                img.setAttribute('src', 'images/mulher.png')
            }
            else if (idade <= 110) {
                img.setAttribute('src', 'images/velha.png')
            }
            else if (idade > 110) {
                img.setAttribute('src', 'images/esqueleto.png')
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `${gender} com ${idade} anos`
        resposta.appendChild(img)
    }




}