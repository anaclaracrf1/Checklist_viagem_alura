const novo_item = document.getElementById('novoItem')

novo_item.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    Cria_elemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function Cria_elemento(nome,quantidade){
    console.log(nome, quantidade)

}