const novo_item = document.getElementById('novoItem')

novo_item.addEventListener("submit", (evento) =>) {
    evento.preventDefault()
    console.log('worked')
}