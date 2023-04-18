const button = document.querySelectorAll('[data-carousel-button]')
let clicked = false


button.forEach(button => {
    button.addEventListener('click',() => {
        clicked = true
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector('[data-active]')
        
        let nextIndex = [...slides.children].indexOf(activeSlide) + offset
        if(nextIndex < 0) nextIndex = slides.children.length - 1
        if(nextIndex >= slides.children.length) nextIndex = 0

        slides.children[nextIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


let autoSlide = setInterval(() => {
    if(!clicked){
        const slides = document.querySelector("[data-slides]")

        const activeSlide = slides.querySelector('[data-active]')
        
        let nextIndex = [...slides.children].indexOf(activeSlide) + 1
        if(nextIndex < 0) nextIndex = slides.children.length - 1
        if(nextIndex >= slides.children.length) nextIndex = 0

        slides.children[nextIndex].dataset.active = true
        delete activeSlide.dataset.active
    }else{
        clearInterval(autoSlide)
    }
},3000)