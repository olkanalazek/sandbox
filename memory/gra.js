const kartaClick = (karta) => {
    karta.style.visibility = 'hidden';
};

document.querySelectorAll('.karta')
    .forEach((karta) => {
        karta.onclick = kartaClick.bind(null, karta);
    });