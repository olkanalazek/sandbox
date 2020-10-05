const zwrocKarte = (pies, tyl) => {
    return `<div class="karta"><div pies="${pies}" bg="${(tyl + 1)}"></div></div>`;
};

const zakryjKarty = () => {
    const karty = document.querySelectorAll('.karta:not(.zakryta)');
    const ilosc = karty.length;

    if (ilosc > 0) {
        karty[Math.floor(Math.random() * ilosc)].classList.add('zakryta');

        setTimeout(zakryjKarty, Math.floor(Math.random() * 50) + 20);
    }

    console.log(karty);
};

const nowaGra = () => {
    const plansza = document.getElementById('plansza');

    if (!plansza) {
        return;
    }

    const kolejnosc = [ ...Array(15).keys(), ...Array(15).keys() ]
        .map((a) => ({ sort: Math.random(), value: a + 1 }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

    const karty = kolejnosc.map(x => zwrocKarte(x, x % 3));

    plansza.innerHTML = karty.join('');

    document.querySelectorAll('.karta')
        .forEach((karta) => {
            karta.onclick = kartaClick.bind(null, karta);
        });

    setTimeout(zakryjKarty, 3000);
};

const kartaClick = (karta) => {
    // karta.style.visibility = 'hidden';
    karta.classList.add('zakryta');
};

nowaGra();