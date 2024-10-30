function recursao(n) {
    if (n - 1 < 2) {
        console.log("Recursao parou");
    } else if (n % 2 !== 0) {
        console.log("Numero impar " + n);
        recursao(n - 1); // Chamada recursiva com n - 1
    } else {
        console.log("Numero par " + n);
        recursao(n - 2); // Chamada recursiva com n - 2
    }
}

// Testando a função
recursao(39);
recursao(10);
recursao(55);
