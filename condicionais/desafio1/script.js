function carregar() {

    let elementoMensagem = document.getElementById('msg') // Área do texto na página
    let imagemHorario = document.getElementById('imagem') // Imagem que será alterada

    let dataAtual = new Date() // Pega data e hora atual do sistema
    let horaAtual = dataAtual.getHours() // Extrai apenas a hora

    elementoMensagem.innerHTML = `Agora são ${horaAtual} horas.` // Mostra a hora na tela

    // Verifica período do dia
    if (horaAtual >= 0 && horaAtual < 12) {

        // MANHÃ
        imagemHorario.src = 'imagens/manha.jpg' // Define imagem da manhã
        document.body.style.background = '#e2cd9f' // Cor de fundo da manhã

    } else if (horaAtual >= 12 && horaAtual <= 18) {

        // TARDE
        imagemHorario.src = 'imagens/tarde.jpg' // Define imagem da tarde
        document.body.style.background = '#b9846f' // Cor de fundo da tarde

    } else {

        // NOITE
        imagemHorario.src = 'imagens/noite.jpg' // Define imagem da noite
        document.body.style.background = '#515154' // Cor de fundo da noite
    }
}