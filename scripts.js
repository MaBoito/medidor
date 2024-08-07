verificarVelocidade (84);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    const MaxPontos = 12;
if (velocidade <= velocidadeMaxima )
    console.log("ok");
else {
    const pontos = Math.floor (((velocidade - velocidadeMaxima)/ kmPorPonto));
    if ( pontos >= MaxPontos)
        console.log("Carteira suspensa");
    else
        console.log("pontos", pontos);
}
}