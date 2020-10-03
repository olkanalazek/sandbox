// choinka

const choinka = (y) => {
    for (let loop = 0; loop < y; loop++) {
        let ileSpacji = y - loop;
        let ileGwiazdek = (loop + 1) * 2 - 1;

        let spacje = ' '.padStart(ileSpacji, ' ');
        let gwiazdki = '*'.padStart(ileGwiazdek, '*');

        console.log(spacje, gwiazdki);
    }
};

choinka(30);
