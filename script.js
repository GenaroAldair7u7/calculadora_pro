let display = document.getElementById('valor-actual');

const wipe_all = () => {
    display.value = '';
}

const wipe = () => {
    display.value = display.value.toString().slice(0,-1);
}

const show = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}