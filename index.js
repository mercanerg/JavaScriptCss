let favcolor = document.getElementById('favcolor');
let text = 'Selected color is ';

favcolor.addEventListener('change', (e) => {
    let text = 'Selected color is ';
    console.log(e.target['value'])
    document.documentElement.style.setProperty('--favcolor', e.target.value)
    text += e.target.value;
    document.getElementById("lblColor").innerHTML = text;
});