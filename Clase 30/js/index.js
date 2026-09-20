const images = document.querySelectorAll('.grid__image')
const modal = document.querySelector('.modal')
const modalImage = document.getElementById('image-big')
const closeModal = document.getElementById('close-modal')

images.forEach((image) => {
    
    image.addEventListener('click', e => {
        showModal()
        console.log(image.querySelector('img').src)
        modalImage.src = image.querySelector('img').src
    })
})

closeModal.addEventListener('click', showModal)

function showModal() {
    modal.classList.toggle('hidden')
}