const novo_item = document.getElementById('novoItem')
const lista = document.getElementById('lista')

novo_item.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value
    
    Cria_elemento(nome, quantidade)

    nome = ""
    quantidade = ""
})


function Cria_elemento(nome,quantidade){

    const NovoItem = document.createElement('li')
    NovoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    NovoItem.appendChild(numeroItem)
    NovoItem.innerHTML += nome

    lista.appendChild(NovoItem)

    localStorage.setItem("nome", nome)
    localStorage.setItem("quantidade", quantidade)
}