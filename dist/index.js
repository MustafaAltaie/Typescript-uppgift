"use strict";
let pText = document.getElementById('pText');
let nText = document.getElementById('nText');
let rText = document.getElementById('rText');
let m = document.getElementById('mText');
let btn = document.getElementById('resultBtn');
let result;
btn.addEventListener('click', () => {
    const p = parseInt(pText.value);
    const r = parseInt(rText.value);
    const n = parseInt(nText.value);
    result = p * ((r * (1 + r) ^ n) / ((-+r) ^ n - 1));
    m.textContent = (Math.round(result)).toString();
});
//# sourceMappingURL=index.js.map