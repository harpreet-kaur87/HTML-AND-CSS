let topnavEl = document.querySelector('.topnav');

function closeNav(){
    topnavEl.style.right = '-200px';
}
function openNav(){
     topnavEl.style.right = '0';
}

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 120){
        topnavEl.classList.add('sticky')
    } else {
        topnavEl.classList.remove('sticky')
    }
})

