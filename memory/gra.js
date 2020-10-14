let iloscProb = 0;
let odkryte = [];

const zwrocKarte = (pies, tyl) => {
    return `<div class="karta"><div pies="${pies}" bg="${(tyl + 1)}"></div></div>`;
};

const zakryjKarty = () => {
    const karty = document.querySelectorAll('.karta:not(.zakryta)');
    const ilosc = karty.length;

    if (ilosc > 0) {
        karty[Math.floor(Math.random() * ilosc)].classList.add('zakryta');
        setTimeout(zakryjKarty, Math.floor(Math.random() * 50) + 20);
    } else {
        document.querySelectorAll('.karta')
            .forEach((karta) => {
                karta.onclick = kartaClick.bind(null, karta);
            });
    }
};

const losujTlo = () => {
    const karty = document.querySelectorAll('.karta.zakryta');

    karty.forEach(x => {
        if (Math.random() > 0.7) {
            const tlo = 1 + (Math.floor(Math.random() * 10) % 3);

            x.children[0].setAttribute('bg', tlo);
        }
    });

    setTimeout(losujTlo, Math.random() * 1500 + 1000);
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

    const karty = kolejnosc.map(x => zwrocKarte(x, Math.floor(Math.random() * 10 + x) % 3));

    plansza.innerHTML = karty.join('');
    uaktualnijStatus();
    setTimeout(zakryjKarty, 3000);
    setTimeout(losujTlo, 5000);
};

const uaktualnijStatus = () => {
    document.getElementById('status').innerText = `Ilość prób: ${iloscProb}`;
};

const kartaClick = (karta) => {
    if (odkryte.length === 2) {
        return;
    }

    if (odkryte.includes(karta)) {
        return;
    }

    karta.classList.remove('zakryta');
    odkryte.push(karta);
    console.log(odkryte);

    if (odkryte.length === 2) {
        const pies1 = odkryte[0].children[0].getAttribute('pies');
        const pies2 = odkryte[1].children[0].getAttribute('pies');

        setTimeout(() => {
            iloscProb++;
            uaktualnijStatus();

            if (pies1 === pies2) {
                odkryte.map(x => {
                    x.classList.add('zgadnieta');
                });
            } else {
                odkryte.map(x => {
                    x.classList.add('zakryta');
                });
            }

            odkryte = [];
        }, 1000);
    }
};

nowaGra();
