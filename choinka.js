// choinka

const czastka = (y, padding = 0) => {
    for (let loop = 0; loop < y; loop++) {
        let ileSpacji = loop + 1;
        let ileGwiazdek = y * 2 - 2 * loop - 1;

        let spacje = ' '.padStart(ileSpacji, ' ');
        let gwiazdki = '*'.padStart(ileGwiazdek, '*');

        console.log(' '.padStart(padding, ' '), spacje, gwiazdki);
    }
};

const choinka = (ile, krotnosc = 3) => {
    for (let loop = 1; loop <= ile; loop++) {
        let wysokosc = (ile - loop + 1) * krotnosc - 1;

        czastka(wysokosc, loop * krotnosc);
    }
};

choinka(4, 5);
