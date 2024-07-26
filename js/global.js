window.addEventListener('scroll', () => {
    if(window.scrollY > 650){
        document.getElementById('toUp').style.opacity = 1
        document.getElementById('toUp').style.visibility = 'visible'
    }else{
        document.getElementById('toUp').style.opacity = 1
        document.getElementById('toUp').style.visibility = 'hidden'
    }
})