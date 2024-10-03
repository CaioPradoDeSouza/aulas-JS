// usa equivalencia de bit 1+1=1 1+0=0 0+0=0 && bit a bit

let n1=11;
let n2=14;

let res = n1 & n2;

console.log(res);

// não usa equivalencia de bit ou || bit a bit

let n3=10;
let n4=11;

let res2 = n3 | n4;

console.log(res2);

// nao usa equivalencia de bit ^ retorna 1 quando nao houver equivalencia

let n5=13;
let n6=14;

let res3 = n5 ^ n6;
console.log(res3);

// usa equivalencia de bit << shift a esquerda

let n7=20;

let res4 = n7 << 2;
console.log(res4);

// usa equivalencia de bit >> shift a direita

let n8=30;

let res5 = n8 >> 2;
console.log(res5);