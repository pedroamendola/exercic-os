function numeroAleatorio(num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(numeroAleatorio(100));
console.log(numeroAleatorio(500));
console.log(numeroAleatorio(1000));
console.log(numeroAleatorio(10000));