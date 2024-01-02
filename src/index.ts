let pText = document.getElementById('pText') as HTMLInputElement;
let nText = document.getElementById('nText') as HTMLInputElement;
let rText = document.getElementById('rText') as HTMLInputElement;
let m = document.getElementById('mText') as HTMLOutputElement;
let btn = document.getElementById('resultBtn') as HTMLButtonElement;
let result: number;

btn.addEventListener('click', (): void => {
    const p = parseInt(pText.value);
    const r = parseInt(rText.value);
    const n = parseInt(nText.value);

    result = p * ((r * (1 + r)^n) / ((- + r)^n - 1));

    m.textContent = (Math.round(result)).toString();
});