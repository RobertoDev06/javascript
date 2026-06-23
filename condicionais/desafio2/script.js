function verificar() {

    let dataAtual = new Date() // Cria uma data com o momento atual
    let anoAtual = dataAtual.getFullYear() // Extrai apenas o ano atual

    let inputAnoNascimento = document.getElementById('anoNascimento') // Campo do ano de nascimento
    let divResultado = document.getElementById('res') // Área onde o resultado será mostrado

    // Verifica se o campo está vazio ou se o ano é inválido
    if (
        inputAnoNascimento.value.length == 0 ||
        Number(inputAnoNascimento.value) > anoAtual
    ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!') // Mensagem de erro
    } else {

        let radiosSexo = document.getElementsByName('sexo') // Botões de seleção de sexo
        let idade = anoAtual - Number(inputAnoNascimento.value) // Calcula a idade

        let sexoDetectado = '' // Guarda o sexo identificado
        let imagemPessoa = document.createElement('img') // Cria uma tag de imagem dinamicamente
        imagemPessoa.setAttribute('id', 'foto') // Define um id para a imagem

        // Verifica se o primeiro botão (Masculino) está marcado
        if (radiosSexo[0].checked) {
            sexoDetectado = 'Homem'

            // Define imagem baseada na idade (homem)
            if (idade < 10) {
                imagemPessoa.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 21) {
                imagemPessoa.setAttribute('src', 'imagens/jovem-menino.jpg')
            } else if (idade < 50) {
                imagemPessoa.setAttribute('src', 'imagens/adulto.jpg')
            } else {
                imagemPessoa.setAttribute('src', 'imagens/idoso.jpg')
            }

        } else {
            sexoDetectado = 'Mulher'

            // Define imagem baseada na idade (mulher)
            if (idade < 10) {
                imagemPessoa.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 21) {
                imagemPessoa.setAttribute('src', 'imagens/jovem-menina.jpg')
            } else if (idade < 50) {
                imagemPessoa.setAttribute('src', 'imagens/adulta.jpg')
            } else {
                imagemPessoa.setAttribute('src', 'imagens/idosa.jpg')
            }
        }

        divResultado.style.textAlign = 'center' // Centraliza o texto do resultado
        divResultado.innerHTML = `Detectamos ${sexoDetectado} com ${idade} anos.` // Mostra o resultado na tela
        divResultado.appendChild(imagemPessoa) // Adiciona a imagem ao resultado
    }
}