const zwrocKarte = (pies, tyl) => {
    return `<div class="karta"><div pies="${pies}" bg="${(tyl + 1)}"></div></div>`;
};

const nowaGra = () => {
    const plansza = document.getElementById('plansza');

    if (!plansza) {
        return;
    }

    const kolejnosc = [...Array(15).keys(), ...Array(15).keys()]
        .map((a) => ({ sort: Math.random(), value: a + 1 }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

    const karty = kolejnosc.map(x => zwrocKarte(x, x % 3));

    plansza.innerHTML = karty.join('');

    document.querySelectorAll('.karta')
        .forEach((karta) => {
            karta.onclick = kartaClick.bind(null, karta);
        });
};

const kartaClick = (karta) => {
    // karta.style.visibility = 'hidden';
    karta.classList.add('zakryta');
};

nowaGra();