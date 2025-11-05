function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (err) {
        if (err instanceof SyntaxError) {
            return null;
        }
        throw err;
    }
}

// Exemplos
console.log(safeParse('{"nome":"Ana"}')); // { nome: 'Ana' }
console.log(safeParse('{"nome": }'));     // null
// ...existing code...