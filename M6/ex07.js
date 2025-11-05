/**
 * safeParse com finally que sempre registra término da tentativa
 */
function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (err) {
        if (err instanceof SyntaxError) return null;
        throw err;
    } finally {
        console.log("Parse attempt finished");
    }
}

// Testes
console.log(safeParse('{"nome":"Ana"}')); // { nome: 'Ana' }
console.log(safeParse('{"nome": }'));     // null
