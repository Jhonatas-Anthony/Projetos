let dataAtual = new Date
let inicioAno = new Date(dataAtual.getFullYear(), 0, 1)
let tempoAtual = dataAtual.getTime()
let tempoInicioAno = inicioAno.getTime()
let tempoPassado = tempoAtual - tempoInicioAno
let totalMilisegundosEmUmAno = 60 * 60 * 24 * 365 * 1000
let porcentagemDoAno = (tempoPassado / totalMilisegundosEmUmAno) * 100
let diasPassados = Math.floor(tempoPassado / (60 * 60 * 24 * 1000))
let horasPassadas = Math.floor(tempoPassado / (60 * 60 * 1000))
let minutosPassados = Math.floor(tempoPassado / (1000 * 60))
let segundosPassadoss = Math.floor(tempoPassado / 1000)

let inside_bar = document.querySelector('#inside-bar')
inside_bar.setAttribute("style", `width: ${porcentagemDoAno}%`)

let textprogress = document.querySelector('.text-progress')
textprogress.innerHTML = `${porcentagemDoAno.toFixed(1)} %`

let title = document.querySelector('#title')
title.innerHTML = `Barra de porcentagem de ${dataAtual.getFullYear()}`

document.getElementById("days").innerHTML = diasPassados
document.getElementById("hours").innerHTML = horasPassadas
document.getElementById("minutes").innerHTML = minutosPassados
document.getElementById("seconds").innerHTML = segundosPassadoss
