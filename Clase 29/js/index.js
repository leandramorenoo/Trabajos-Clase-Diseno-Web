const header = document.querySelector('header')

// CAMBIAR EL COLOR DEL HEADER
document.addEventListener('scroll', e => {
    console.log(window.scrollY)
        if(window.scrollY > 300) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky')
        }
})

// -------- /

const sliderContainer = document.getElementById('slider-content')
const sliderTitle = document.getElementById('slider-title')
const sliderDescription = document.getElementById('slider-description')
const sliderBack = document.getElementById('slider-back')
const sliderNext = document.getElementById('slider-next')

const slider = [
    {title: 'The 1th title', description: 'Lorem ipsum solor sit amet', image: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {title: 'The 2nd title', description: 'Lorem ipsum solor sit amet', image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=2526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {title: 'The 3th title', description: 'Lorem ipsum solor sit amet', image: 'https://plus.unsplash.com/premium_photo-1723774894918-635e6eee6572?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {title: 'The 4th title', description: 'Lorem ipsum solor sit amet', image: 'https://images.unsplash.com/photo-1520124442480-b5c60b0f80c2?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
]

let count = 0

sliderContainer.style = `background-image: url("${slider[count].image}")`
sliderTitle.innerText = slider[count].title
sliderDescription.innerText = slider[count].description

sliderNext.addEventListener('click', e => {
    if (count >= slider.length - 1) {
        count = 0
    } else {
        count++
    }
    
    sliderContainer.style = `background-image: url("${slider[count].image}")`
    sliderTitle.innerText = slider[count].title
    sliderDescription.innerText = slider[count].description
})
sliderBack.addEventListener('click', e => {
    if (count <= 0) {
        count = slider.lenght - 1
    } else {
        count--
    }
    
    sliderContainer.style = `background-image: url("${slider[count].image}")`
    sliderTitle.innerText = slider[count].title
    sliderDescription.innerText = slider[count].description
})