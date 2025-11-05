function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (err) {
        console.error("Erro ao analisar JSON:", err.message);
        return null;
    }
}
const data = safeParse('{"nome": "João", "idade": 30}'); 
console.log(data);
const invalidData = safeParse('{"nome": "João", "idade": }'); 
console.log(invalidData);   
                        


