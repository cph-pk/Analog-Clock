setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const point = document.getElementById('point')

for (let i = 1; i <= 60; i++) {
    if (!(i % 5 === 0)) {
        let tag = document.createElement("div")
        let text = document.createTextNode("|")
        tag.append(text)
        tag.classList.add("point")
        tag.style.cssText += "--rotation: " + (i * 6) + "deg"
        point.appendChild(tag)
    } else {
        let tag = document.createElement("div")
        tag.classList.add("point")
        tag.classList.add("triangle-down")
        tag.style.cssText += "--rotation: " + (i * 6) + "deg"
        point.appendChild(tag)
    }
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