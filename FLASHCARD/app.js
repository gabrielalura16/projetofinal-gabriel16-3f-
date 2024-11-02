function criaCartao (categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
        cartao.className = 'cartao'
        let respostaEstaVisivel = false
        cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>${categoria}</h3>
<div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
</div>
<div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
</div>
</div>
`
}

function viraCartao(){
    respostaestaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}

cartao.addEventListener('click', viraCartao)