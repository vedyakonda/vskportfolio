// Get the video
var video = document.getElementById("myVideo");


// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}
// Example usages:
scrollTrigger('.intro-text')

scrollTrigger('.scroll-reveal', {
    rootMargin: '-100px',
})