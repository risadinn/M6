class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidAgeError';
    }
}

function checkAge(age) {
    if (typeof age !== 'number' || Number.isNaN(age)) {
        throw new TypeError('age deve ser um número');
    }
    if (age < 0 || age > 120) {
        throw new InvalidAgeError('Idade fora do intervalo');
    }
    return 'Idade válida';
}

// Testes
[-5, 30, 200].forEach(a => {
    try {
        console.log(a, '->', checkAge(a));
    } catch (err) {
        console.log(a, '->', `${err.name}: ${err.message}`);
    }
});