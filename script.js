setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const point = document.getElementById('minute-marks')

for (let i = 1; i <= 60; i++) {
    let tag = document.createElement("div")
    if (!(i % 5 === 0)) {
        let text = document.createTextNode("|")
        tag.append(text)
        tag.classList.add("marks")
    } else {
        tag.classList.add("marks")
        tag.classList.add("triangle")
    }
    tag.style.cssText += "--rotation: " + (i * 6) + "deg"
    point.appendChild(tag)
}

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()