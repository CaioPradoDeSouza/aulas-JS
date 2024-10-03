let colocacao = 5;

switch (colocacao) {
    case 1:
        console.log("Voce foi o primeiro a chegar!");
        break;
    case 2:
        console.log("Voce foi o segundo a chegar!");
        break;
    case 3:
        console.log("Voce foi o terceiro a chegar!");
        break;
    case 4: case 5: case 6:
        console.log("Você ganhou premio de participação!");
        break;
    default:
        console.log("Voce nao foi premiado!");
        break;
}