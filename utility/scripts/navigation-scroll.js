const header = document.querySelector('header')
console.log(header)

function stickyNav(){
    header.classList.toggle('scrolled',window.pageYOffset > 0)
}

window.addEventListener('scroll',stickyNav)