function tabuada() {

    let inputNumero = document.getElementById('txtn') // Campo onde o usuário digita o número
    let selectTabuada = document.getElementById('seltab') // Lista onde a tabuada será exibida

    // Verifica se o campo está vazio
    if (inputNumero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {

        let numeroBase = Number(inputNumero.value) // Converte o valor digitado para número
        let contador = 1 // Começa a tabuada no 1

        selectTabuada.innerHTML = '' // Limpa resultados antigos antes de gerar nova tabuada

        // Gera a tabuada de 1 até 10
        while (contador <= 10) {

            let itemOption = document.createElement('option') // Cria um item da lista

            // Define o texto que aparece na tabuada (ex: 5 x 1 = 5)
            itemOption.text = `${numeroBase} x ${contador} = ${numeroBase * contador}`

            // Valor interno do option (não aparece para o usuário)
            itemOption.value = `tab${contador}`

            // Adiciona o item dentro do select
            selectTabuada.appendChild(itemOption)

            contador++ // Incrementa o contador
        }
    }
}