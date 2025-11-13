const textoCitacaoEl = document.getElementById('textoCitacao');
const autorCitacaoEl = document.getElementById('autorCitacao');
const btnNovaCitacao = document.getElementById('btnNovaCitacao');

const citacoes = [
    {
        texto: "Não adianta voltar ao ontem, porque eu era uma pessoa diferente.",
        autor: "Alice",
 
    },
    {
        texto: "A imaginação é a única arma na guerra contra a realidade.",
        autor: "Lewis Carroll / Narrador",
        
    },
    {
        texto: "Se você não sabe para onde quer ir, qualquer caminho serve.",
        autor: "Gato Risonho",
      
    },
    {
        texto: "Um dia você se tornará completamente maluco, e isso é parte do encanto.",
        autor: "Chapeleiro Maluco",
      

        
    },
     {
        texto: "Se você consegue imaginar, você pode fazer.",
        autor: "Chapeleiro Maluco",
       
    },
];

function gerarNovaCitacao() {
    if (citacoes.length === 0) return;

    const indiceAleatorio = Math.floor(Math.random() * citacoes.length);
    const citacaoSorteada = citacoes[indiceAleatorio];

    textoCitacaoEl.textContent = `"${citacaoSorteada.texto}"`;
    autorCitacaoEl.textContent = `— ${citacaoSorteada.autor}`;

    // Aplica o fundo da citação
    document.body.style.background = citacaoSorteada.fundo;
}

// Evento para gerar nova citação ao clicar no botão
btnNovaCitacao.addEventListener('click', gerarNovaCitacao);

// Gera a primeira citação ao carregar a página
gerarNovaCitacao();
