const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const productLink = document.querySelector('.drop-effect')
const dropDown = document.querySelector('.drop-down')
const dropDownPro = document.querySelector('.drop-down-pro')
const filter = document.querySelector('.filter')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})


productLink.addEventListener("click", () => {
    productLink.classList.toggle("active")
    dropDown.classList.toggle("active")
})

filter.addEventListener("click", () => {
    filter.classList.toggle("active")
    dropDownPro.classList.toggle("active")   
})