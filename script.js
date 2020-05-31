'use stric';

// ░█▄─░█ ░█─░█ ░█▀▄▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀█ ░█▀▀▀█ 
// ░█░█░█ ░█─░█ ░█░█░█ ░█▀▀▄ ░█▀▀▀ ░█▄▄▀ ─▀▀▀▄▄ 
// ░█──▀█ ─▀▄▄▀ ░█──░█ ░█▄▄█ ░█▄▄▄ ░█─░█ ░█▄▄▄█
(() => {
    const numbers = document.getElementById('numbers');
    let numberDiv = '';
    for (let i = 9; i >= 0; i--) {
        numberDiv += `<div class="number" style="grid-area:${String.fromCharCode(97 + i)}" data-value="${i}">${i}</div>`;
    }

    numberDiv += `<div class="number" data-value=".">,</div>`;

    numbers.innerHTML = numberDiv;
})();


// ░█▀▀▀ ▀▄░▄▀ ▀▀█▀▀ ░█▀▀█ ─█▀▀█ ░█▀▀▀█ 
// ░█▀▀▀ ─░█── ─░█── ░█▄▄▀ ░█▄▄█ ─▀▀▀▄▄ 
// ░█▄▄▄ ▄▀░▀▄ ─░█── ░█─░█ ░█─░█ ░█▄▄▄█
(() => {
    const extras = document.getElementById('extras');
    const options = ['C', '±', '%'];
    let extraDiv = '';
    options.forEach(option => extraDiv += `<div class="extra" data-extra="${option}">${option}</div>`);
    extras.innerHTML = extraDiv;
})();


// ░█▀▀▀█ ░█▀▀█ ░█▀▀▀ ░█▀▀█ ▀▀█▀▀ ░█▀▀▀█ ░█▀▀█ ░█▀▀▀█ 
// ░█──░█ ░█▄▄█ ░█▀▀▀ ░█▄▄▀ ─░█── ░█──░█ ░█▄▄▀ ─▀▀▀▄▄ 
// ░█▄▄▄█ ░█─── ░█▄▄▄ ░█─░█ ─░█── ░█▄▄▄█ ░█─░█ ░█▄▄▄█
(() => {
    const operators = document.getElementById('operators');
    const options = ['÷', '×', '-', '+', '='];
    let operatorDiv = '';
    options.forEach(option => operatorDiv += `<div class="operator" data-operator="${option}">${option}</div>`);
    operators.innerHTML = operatorDiv;
})();


// ░█▀▀█ ░█▀▀▀ ░█▀▀▀█ ░█─░█ ░█─── ▀▀█▀▀ ░█▀▀▀█ 
// ░█▄▄▀ ░█▀▀▀ ─▀▀▀▄▄ ░█─░█ ░█─── ─░█── ─▀▀▀▄▄ 
// ░█─░█ ░█▄▄▄ ░█▄▄▄█ ─▀▄▄▀ ░█▄▄█ ─░█── ░█▄▄▄█
(() => {
    const results = document.getElementById('results');
    const values = ['1', '0', '0', '+', '5', '0'];
    let resultDiv = '';
    values.forEach(value => resultDiv += `<div class="result" data-operator="${value}">${value}</div>`);
    results.innerHTML = resultDiv;
})();
