"use strict";
let pText = document.getElementById('pText');
let nText = document.getElementById('nText');
let rText = document.getElementById('rText');
let m = document.getElementById('mText');
let btn = document.getElementById('resultBtn');
let result;
let p;
let r;
let n;
btn.addEventListener('click', () => {
    if (Number(pText.value) <= 0 || Number(rText.value) <= 0 || Number(nText.value) <= 0) {
        alert('Please input realistic amounts');
    }
    else {
        p = Number(pText.value);
        r = Number(rText.value);
        if (Number(nText.value) > 300)
            alert('Please input a reasonable number, for example up to 30 year');
        else {
            n = Number(nText.value);
            result = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
            m.textContent = `The monthly cost is : ${(Math.round(result)).toString()}`;
        }
    }
});
//# sourceMappingURL=index.js.map