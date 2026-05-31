function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        
        // Limpa a tabela anterior antes de começar a mostrar a nova
        tab.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            
            // Usando Template Strings para formatar o texto (ex: 6 x 1 = 6)
            item.text = `${n} x ${c} = ${n * c}`
            
            // Define o value de cada option
            item.value = `tab${c}`
            
            // Adiciona o elemento option criado dentro do select
            tab.appendChild(item)
            
            c++
        }
    }
}