const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"
async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${dados.total_pessoas_mundo} </span> de Pessoas, e que aproximadamente <span> ${dados.total_pessoas_conectadas} </span> estão conectadas em alguma Rede Social e passam em média <span> ${dados.tempo_medio} </span> Horas Conectadas.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
    console.log(paragrafo);
}
visualizarInformacoesGlobais()