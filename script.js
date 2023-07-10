const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const productLink = document.querySelector('.drop-effect')
const dropDown = document.querySelector('.drop-down')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active")
//     navMenu.classList.remove("active")
// }))

productLink.addEventListener("click", () => {
    productLink.classList.toggle("active")
    dropDown.classList.toggle("active")
})