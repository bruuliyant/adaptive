let doc = document

let modalka = doc.querySelector('.modalka')
let zayavka = doc.querySelector('.zayavka')
let imya = doc.querySelector('.imya')
let email = doc.querySelector('.email')
let soobshenie = doc.querySelector('.soobshenie')
let button = doc.querySelector('.button')
let buton = doc.querySelector('.buton')
let vsye = doc.querySelector('.vsye')

buton.addEventListener('click', () => {
    modalka.classList.toggle('modalka_active')
    zayavka.classList.toggle('zayavka_active')
    imya.classList.toggle('imya_active')
    email.classList.toggle('email_active')
    soobshenie.classList.toggle('soobshenie_active')
    button.classList.toggle('button_active')
    vsye.classList.toggle('vsye_active')
})

button.addEventListener('click', () => {
    modalka.classList.toggle('modalka_active')
    zayavka.classList.toggle('zayavka_active')
    imya.classList.toggle('imya_active')
    email.classList.toggle('email_active')
    soobshenie.classList.toggle('soobshenie_active')
    button.classList.toggle('button_active')
    vsye.classList.toggle('vsye_active')
})

