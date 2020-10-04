const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));

topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

// licznik
document.getElementById('serduszko').onclick = () => {
    fetch('https://api.countapi.xyz/hit/olkanalazek.github.io/hearts')
        .then(uaktualnijLicznik);
};

const uaktualnijLicznik = () => {
    fetch('https://api.countapi.xyz/get/olkanalazek.github.io/hearts')
        .then(response => response.json())
        .then(data => {
            document.getElementById('licznik').innerText = data.value;
        });
};

uaktualnijLicznik();
