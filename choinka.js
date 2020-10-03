// choinka

const czastka = (y, padding = 0) => {
    let bufor = [];
    let nl = (typeof window === 'undefined') ? "\n" : "<br>";

    for (let loop = 0; loop < y; loop++) {
        let ileSpacji = loop + 1;
        let ileGwiazdek = y * 2 - 2 * loop - 1;

        let spacje = ' '.padStart(ileSpacji, ' ');
        let gwiazdki = '*'.padStart(ileGwiazdek, '*');

        bufor.push([ ' '.padStart(padding, ' '), spacje, gwiazdki ].join(''));
    }

    return bufor.join(nl) + nl;
};

const choinka = (ile, krotnosc = 3) => {
    let bufor = '';

    for (let loop = 1; loop <= ile; loop++) {
        let wysokosc = (ile - loop + 1) * krotnosc - 1;

        bufor += czastka(wysokosc, loop * krotnosc);
    }

    return bufor;
};

console.log(choinka(4, 5));
