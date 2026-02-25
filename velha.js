var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');
var contadorJogos = 0;
var contadorX = 0;
var contadorO = 0;

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checarVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9); 

    // Verifica cada sequência de vitória
    if (checarSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1, quadrado2, quadrado3);
        reiniciar(); // Reinicia o jogo após a vitória
        return;
    } else if (checarSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4, quadrado5, quadrado6);
        reiniciar(); // Reinicia o jogo após a vitória
        return;
    } else if (checarSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7, quadrado8, quadrado9);
        reiniciar(); // Reinicia o jogo após a vitória
        return;
    } else if (checarSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1, quadrado4, quadrado7);
        reiniciar(); // Reinicia o jogo após a vitória
        return;
    } else if (checarSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2, quadrado5, quadrado8);
        reiniciar(); // Reinicia o jogo após a vitória
        return;
    } else if (checarSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3, quadrado6, quadrado9);
        reiniciar(); // Reinicia o jogo após a vitória
        return;
    } else if (checarSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1, quadrado5, quadrado9);
        reiniciar(); // Reinicia o jogo após a vitória
        return;
    } else if (checarSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3, quadrado5, quadrado7);
        reiniciar(); // Reinicia o jogo após a vitória
        return;
    }
}

function mudarVencedor(quadrado1, quadrado2, quadrado3) {
    vencedor = quadrado1.innerHTML; // Define o vencedor com o valor do quadrado
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#fb00ff';
    quadrado2.style.background = '#fb00ff';
    quadrado3.style.background = '#fb00ff';
}

function checarSequencia(quadrado1, quadrado2, quadrado3) {
    var igual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        igual = true;
    }
    return igual;
}

// Função que reinicia o jogo e atualiza os contadores corretamente
function reiniciar() {
    contadorJogos++; // Aumenta o contador de jogos
    if (vencedor === 'X') {
        contadorX++; // Aumenta a pontuação de X
    } else if (vencedor === 'O') {
        contadorO++; // Aumenta a pontuação de O
    }

    // Atualiza os contadores no HTML
    document.getElementById("contador-jogos").innerHTML = contadorJogos;
    document.getElementById("contador-x").innerHTML = contadorX;
    document.getElementById("contador-o").innerHTML = contadorO;

    // Reseta os quadrados para o início
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X'); // Inicia com o jogador X
}
