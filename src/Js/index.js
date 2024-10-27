/*
    OBJETIVO 1: Quando passar o mouse em cima do personagem temos que: 
    -colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

    -retirar a classe selecionado do personagem anterior que está selecionado

    OBJETIVO 2: Quando passar o mouse em cima do personagem temos que:
    -trocar a imagem grande do jogador 1 pelo personagem que o mouse estará em cima

    -trocar o nome do personagem grande do jogador 1 pelo outro que o mouse estará em cima
*/

/* 
    OBJETIVO 1: Quando passar o mouse em cima do personagem temos que: 
    -colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele
    -retirar a classe selecionado do personagem anterior que está selecionado
*/  

 const personagens = document.querySelectorAll('.personagem');

 personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return; //caso a imagem selecionada seja ultron, não mostrará nem a imagem, nem o nome

        const personagemSelecionado = document.querySelector('.selecionado');
        //-retirar a classe selecionado do personagem anterior que está selecionado
        personagemSelecionado.classList.remove('selecionado');
        
        // -colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele
        personagem.classList.add('selecionado');
    
    /*  
        OBJETIVO 2: Quando passar o mouse em cima dos personagens temos que:
        -trocar a imagem grande do jogador 1 pela imagem do personagem que o mouse estará em cima

        -trocar o nome do personagem grande do jogador 1 pelo nome do outro personagem que o mouse estará em cima 
    */

// -trocar a imagem grande do jogador 1 pela imagem do personagem que o mouse estará em cima 
 const imagemJogador1 = document.getElementById('personagem-jogador-1');
 imagemJogador1.src = `./src/images/${idSelecionado}.png`;

//-trocar o nome do personagem grande do jogador 1 pelo nome do outro personagem que o mouse estará em cima 
 const nomeJogador1 = document.getElementById('nome-jogador-1');
 const nomeSelecionado = personagem.getAttribute('data-name');
 
 nomeJogador1.innerHTML = nomeSelecionado;
    })
 })
