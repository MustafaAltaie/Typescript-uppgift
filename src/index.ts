let pText = document.getElementById('pText') as HTMLInputElement;
let nText = document.getElementById('nText') as HTMLInputElement;
let rText = document.getElementById('rText') as HTMLInputElement;
let m = document.getElementById('mText') as HTMLOutputElement;
let btn = document.getElementById('resultBtn') as HTMLButtonElement;
let result: number;
let p: number;
let r: number;
let n: number;

btn.addEventListener('click', (): void => {
    if(Number(pText.value) <= 0 || Number(rText.value) <= 0 || Number(nText.value) <= 0){
        alert('Please input realistic amounts')
    } else {
        p = Number(pText.value);
        r = Number(rText.value);
        if(Number(nText.value) > 300)
        alert('Please input a reasonable number, for example up to 30 year');
        else {
            n = Number(nText.value);
            result = p * r * Math.pow(1 + r,n) / (Math.pow(1 + r,n) - 1);
            m.textContent = `The monthly cost is : ${(Math.round(result)).toString()}`;
        }
    }
});