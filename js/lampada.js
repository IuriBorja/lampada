const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const reset = document.getElementById('reset');
const lamp = document.getElementById('lamp');



function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}


function lampOn () {
    if(!isLampBroken()) {
        lamp.src = '../images/ligada.jpg';
    } 
}

function lampOff () {
    if(!isLampBroken()) {
        lamp.src = '../images/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = '../images/quebrada.jpg';
}


function resetAll () {
    if(isLampBroken()) {
        lamp.src = '../images/desligada.jpg';
    }
}




turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
reset.addEventListener('click', resetAll);
