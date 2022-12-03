// document.body.style.zoom = .9
const hamburger = document.querySelector(".ham-bar")
const links = document.querySelector(".links")
let counter = 0

hamburger.addEventListener("click",() => {
    if(!counter){
        links.style.transform = "translateY(0)"
        links.style.opacity = "1"
        counter = 1
    }else{
        links.style.transform = "translateY(-10rem)"
        links.style.opacity = "0"
        counter = 0
    }        
})