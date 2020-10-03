// tabliczka

let x, y;
let bufor = '';

const pomnoz = (a, b) => {
    return String(100 - a * b).padStart(4);
};

for (y = 1; y <= 10; y++) {
    for (x = 1; x <= 10; x++) {
        bufor += ' ' + pomnoz(x, y);
    }

    console.log(bufor);
    bufor = '';
}
