const hours = document.querySelector('.hour')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

let timeHours = 0
let timeMinutes = 0
let timeSeconds = 0

let miIntervalSeconds = setInterval(() => {
    timeSeconds++
    seconds.innerHTML = timeSeconds
}, 1000)

let miIntervalMinutes = setInterval(() => {
    timeMinutes++
    seconds.innerHTML = timeSeconds
}, 60000)

clearInterval(miIntervalSeconds)