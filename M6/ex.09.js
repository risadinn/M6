// ...existing code...
// Causa: o segundo argumento é `undefined`; na operação aritmética `2 + undefined` o `undefined` é convertido para NaN,
// portanto o resultado é NaN. Os logs abaixo mostram os valores antes e depois da soma.
function soma(a, b) {
    console.log('antes: a =', a, ', b =', b);
    const resultado = a + b;
    console.log('depois: resultado =', resultado);
    return resultado;
}

console.log('chamada: soma(2, undefined)');
console.log(soma(2, undefined));
