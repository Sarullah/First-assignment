document.getElementById('container').style.background='lightblue';
document.getElementById('container').style.width = '100%';
document.getElementById('container').style.height = '100vh';
document.getElementById('container').style.position = 'relative';
document.getElementById('clock').style.width = '500px';
document.getElementById('clock').style.height = '500px';
document.getElementById('clock').style.background = 'rgba(214, 162, 232,0.6)';
document.getElementById('clock').style.position = 'absolute';
document.getElementById('clock').style.left = '30%';
document.getElementById('clock').style.top = '10%';
document.getElementById('clock').style.borderRadius = '50%';


setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-min-hand]')
const secHand = document.querySelector('[data-sec-hand]')


function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secHand, secondsRatio)
    setRotation(minHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

function setRotation(element,rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()