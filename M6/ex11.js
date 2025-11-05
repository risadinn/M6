// Exemplo simples: insere `debugger` dentro de uma função para pausar o executável
function exemploDebug(a, b) {
    // coloque um breakpoint aqui com `debugger` — ao executar no navegador/Node,
    // a execução vai pausar e abrir o depurador (se ativado).
    debugger;
    const soma = a + b;
    console.log('soma =', soma);
    return soma;
}

// Chamada de teste
console.log('Antes da chamada');
exemploDebug(2, 3);
console.log('Depois da chamada');
