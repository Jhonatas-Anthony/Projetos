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
        if (gender === 'Masculino') {
            if (idade >= 0 && idade <= 12) {
                img.setAttribute("src", "images/menino-menino.png")
            }
            else if (idade <= 18) {
                img.setAttribute('src', '')
            }
            else if (idade <= 30) {
                img.setAttribute('src', '')
            }
            else if (idade <= 50) {
                img.setAttribute('src', '')
            }
            else if (idade <= 70) {
                img.setAttribute('src', '')
            }
            else if (idade <= 100) {
                img.setAttribute('src', '')
            }
            else if (idade > 100) {
                img.setAttribute('src', '')
            }
        }
        else if (gender === 'Feminino') {
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', '')
            }
            else if (idade <= 18) {
                img.setAttribute('src', '')
            }
            else if (idade <= 30) {
                img.setAttribute('src', '')
            }
            else if (idade <= 50) {
                img.setAttribute('src', '')
            }
            else if (idade <= 70) {
                img.setAttribute('src', '')
            }
            else if (idade <= 100) {
                img.setAttribute('src', '')
            }
            else if (idade > 100) {
                img.setAttribute('src', '')
            }
        }
        resposta.innerHTML = `${gender} com ${idade} anos`
        resposta.appendChild(img)
        console.log(resposta.appendChild(img))
    }




}