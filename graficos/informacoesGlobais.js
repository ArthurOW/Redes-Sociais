const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"
async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de Pessoas, e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma Rede Social e passam em média ${dados.tempo_medio} Horas Conectadas.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
    console.log(paragrafo);
}
visualizarInformacoesGlobais()