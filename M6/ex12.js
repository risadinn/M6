function interno(m) {
    return m * 3;
}

function externo(n) {
    return interno(n) + 1;
}

console.log(externo(4)); // 13
