/*
Cenários: nunca confiar plenamente em dados vindos de formulários, APIs externas, arquivos,
argumentos da linha de comando ou qualquer entrada de usuário/terceiro.
Validações simples: verificar tipo com typeof, usar Number.isFinite/isNaN para números,
aplicar parse + valor padrão, e decidir entre lançar (throw) ou retornar um erro claro.
*/

// validação simples: garante que o valor é um número ou lança TypeError
function ensureNumber(value, name = 'valor') {
    const n = Number(value);
    if (!Number.isFinite(n)) {
        throw new TypeError(`${name} deve ser um número, recebido: ${typeof value}`);
    }
    return n;
}

// exemplo de uso
try {
    const idade = ensureNumber('25', 'idade'); // retorna 25
    const pontuacao = ensureNumber('abc', 'pontuação'); // lança TypeError
} catch (err) {
    console.error(err.message);
}

function parseNumberOrDefault(value, defaultValue = 0) {
    const n = Number(value);
    return Number.isFinite(n) ? n : defaultValue;
}