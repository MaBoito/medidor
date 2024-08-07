verificarVelocidade (84);

function verificarVelocidade(velocidade) {
if (velocidade <=70 )
    console.log("ok");
else {
    const pontos = Math.floor (((velocidade - 70)/ 5));
    if ( pontos >= 12)
        console.log("Carteira suspensa");
    else
        console.log("pontos", pontos);
}
}