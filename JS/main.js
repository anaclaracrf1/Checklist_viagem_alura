const novo_item = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = [];

novo_item.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value

    nome = " "
    quantidade = " "
    
    Cria_elemento(nome, quantidade)

   
})


function Cria_elemento(nome,quantidade){

    const NovoItem = document.createElement('li')
    NovoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    NovoItem.appendChild(numeroItem)
    NovoItem.innerHTML += nome

    lista.appendChild(NovoItem)

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem("Item", JSON.stringify(itens))
}