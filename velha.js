var jogador = 'X';
var vencedor = null;

var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

var contadorJogos = 0;
var contadorX = 0;
var contadorO = 0;

var combinacoes = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) return;

    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML !== '-') return;

    quadrado.innerHTML = jogador;
    quadrado.classList.add('ativo');

    checarVencedor();

    jogador = jogador === 'X' ? 'O' : 'X';
    mudarJogador(jogador);
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {

    for (var i = 0; i < combinacoes.length; i++) {

        var [a, b, c] = combinacoes[i];

        var q1 = document.getElementById(a);
        var q2 = document.getElementById(b);
        var q3 = document.getElementById(c);

        if (checarSequencia(q1, q2, q3)) {
            destacarVitoria(q1, q2, q3);
            definirVencedor(q1.innerHTML);
            setTimeout(reiniciar, 1200);
            return;
        }
    }
}

function checarSequencia(q1, q2, q3) {
    return (
        q1.innerHTML !== '-' &&
        q1.innerHTML === q2.innerHTML &&
        q2.innerHTML === q3.innerHTML
    );
}

function destacarVitoria(q1, q2, q3) {
    q1.classList.add('vitoria');
    q2.classList.add('vitoria');
    q3.classList.add('vitoria');
}

function definirVencedor(valor) {
    vencedor = valor;
    vencedorSelecionado.innerHTML = vencedor;

    contadorJogos++;

    if (vencedor === 'X') contadorX++;
    if (vencedor === 'O') contadorO++;

    atualizarPlacar();
}

function atualizarPlacar() {
    document.getElementById("contador-jogos").innerHTML = contadorJogos;
    document.getElementById("contador-x").innerHTML = contadorX;
    document.getElementById("contador-o").innerHTML = contadorO;
}

function reiniciar() {

    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.innerHTML = '-';
        quadrado.classList.remove('vitoria');
        quadrado.classList.remove('ativo');
    }

    mudarJogador('X');
}