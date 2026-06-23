function contar() {

    let inputInicio = document.getElementById('txti') // Campo do número inicial
    let inputFim = document.getElementById('txtf') // Campo do número final
    let inputPasso = document.getElementById('txtp') // Campo do passo (intervalo)
    let divResultado = document.getElementById('res') // Área onde o resultado aparece

    // Verifica se algum campo está vazio
    if (
        inputInicio.value.length == 0 ||
        inputFim.value.length == 0 ||
        inputPasso.value.length == 0
    ) {
        divResultado.innerHTML = 'Impossível contar!' // Mensagem de erro
    } else {

        divResultado.innerHTML = 'Contando: <br>' // Texto inicial da contagem

        let numeroInicio = Number(inputInicio.value) // Converte início para número
        let numeroFim = Number(inputFim.value) // Converte fim para número
        let numeroPasso = Number(inputPasso.value) // Converte passo para número

        // Se o passo for inválido (0 ou negativo)
        if (numeroPasso <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            numeroPasso = 1
        }

        // Contagem crescente
        if (numeroInicio < numeroFim) {

            for (let contador = numeroInicio; contador <= numeroFim; contador += numeroPasso) {
                divResultado.innerHTML += ` ${contador} 👉`
            }

        } 
        // Contagem regressiva
        else {

            for (let contador = numeroInicio; contador >= numeroFim; contador -= numeroPasso) {
                divResultado.innerHTML += ` ${contador} 👉`
            }
        }

        divResultado.innerHTML += `🏁` // Final da contagem
    }
}