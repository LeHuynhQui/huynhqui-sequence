const src = document.getElementById('src')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const text8 = document.querySelector('.text-8')


AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});
window.addEventListener('scroll', e => {
    let number = window.scrollY
    console.log(number)
    let stringNumberImg
    // if (action.number <= 292) {

    if (number <= 3) {
        src.src = `./img/HACKER/hacker0001.jpg`

    }

    if (number % 3 === 0 && number >= 4 && number <= 678) {
        stringNumberImg = (number - (number / 3 + 1)).toString().padStart(4, 0)
        src.src = `./img/HACKER/hacker${stringNumberImg}.jpg`

    }
    //////////////////////////
    if (number >= 679 && number <= 680) {
        src.src = `./img/ADN/dna200_0001.jpg`
    }

    if (number % 3 === 0 && number >= 681 && number <= 1557) {
        stringNumberImg = (number / 3 - 226).toString().padStart(4, 0)
        src.src = `./img/ADN/dna200_${stringNumberImg}.jpg`
    }


    if (number >= 1558 && number <= 1559) {
        src.src = `./img/ADN SPIDER MAN/ezgif-frame-008.jpg`
    }

    if (number % 3 === 0 && number >= 1560 && number < 1977) {
        stringNumberImg = (number / 3 - 511).toString().padStart(3, 0)
        src.src = `./img/ADN SPIDER MAN/ezgif-frame-${stringNumberImg}.jpg`
    }

    if (number >= 1977) {
        src.src = `./img/ADN SPIDER MAN/ezgif-frame-148.jpg`
        header.classList.add('d-none')
        footer.classList.add('d-none')
    } else {
        header.classList.remove('d-none')
        footer.classList.remove('d-none')
    }

    if (number <=1975) {
        text8.classList.add('d-none')
    } else {
        text8.classList.remove('d-none')
    }
}) 



window.addEventListener('DOMContentLoaded', e => {
    let tl0 = new TimelineMax()
    tl0
    .from('.logo-span-1', 0.1, {x:10, opacity:0})
    .from('.logo-span-2', 0.1, {y:10, opacity:0})
    .from('.logo-span-3', 0.1, {y:10, opacity:0})
    .from('.logo-span-4', 0.1, {y:10, opacity:0})
    .from('.logo-span-5', 0.1, {y:10, opacity:0})
    .from('.logo-span-6', 0.1, {y:10, opacity:0})
    .from('.logo-span-7', 0.1, {y:10, opacity:0})
    .from('.logo-span-8', 0.1, {y:10, opacity:0})
    .from('.logo-span-9', 0.1, {y:10, opacity:0})
    .from('.name-text', 0.5, {opacity:0, scale:0})



    // ////////////////
    let tl1 = new TimelineMax()
    tl1
    .to('.name-text', 1, {opacity:0, scale:0})

    let controller = new ScrollMagic.Controller()

    let scene = new ScrollMagic.Scene({
        triggerElement: '.section1',
        triggerHook:0,
        duration: '10%',
        offset: 100,
    })
    .addTo(controller)
    // .addIndicators()
    .setPin('.section1')
    .setTween(tl1)

//////////////////////
    let tl2 = new TimelineMax()
    tl2
    .from('.about', 2, {opacity:0})
    .to('.about', 1, {y:-100, opacity:0})
    


    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.about',
        triggerHook:0,
        duration: '40%',
        offset: '-250',
    })
    .addTo(controller)
    // .addIndicators()
    .setPin('.about')
    .setTween(tl2)

//////////////////////
    


    let tl3 = new TimelineMax()
    tl3
    .from('.text-3', .1, {opacity:0})
    .to('.text-3', 3, {opacity:0, y:-50})


    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.text-3',
        triggerHook:0,
        duration: '20%',
        offset: '-175',
    })
    .addTo(controller)
    // .addIndicators()
    .setPin('.text-3')
    .setTween(tl3)


    /////////////////////////
    let tl4 = new TimelineMax()
    tl4
    .from('.text-4', .1, {opacity:0,})
    .to('.text-4', 3, {opacity:0, y:-100})


    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.text-4',
        triggerHook:0,
        duration: '20%',
        offset: '-380',
    })
    .addTo(controller)
    // .addIndicators()
    .setPin('.text-4')
    .setTween(tl4)


    //////////////////
    let tl5 = new TimelineMax()
    tl5
    .from('.text-5', .1, {opacity:0,})
    .to('.text-5', 3, {opacity:0, y:-100})


    let scene5 = new ScrollMagic.Scene({
        triggerElement: '.text-5',
        triggerHook:0,
        duration: '20%',
        offset: '-380',
    })
    .addTo(controller)
    // .addIndicators()
    .setPin('.text-5')
    .setTween(tl5)






    //////////////////
    let tl6 = new TimelineMax()
    tl6
    .from('.text-6', .1, {opacity:0,})
    .to('.text-6', 5, {opacity:0, y:-100})


    let scene6 = new ScrollMagic.Scene({
        triggerElement: '.text-6',
        triggerHook:0,
        duration: '20%',
        offset: '-380',
    })
    .addTo(controller)
    // .addIndicators()
    .setPin('.text-6')
    .setTween(tl6)



    //////////////////
    let tl7 = new TimelineMax()
    tl7
    .from('.text-7', .1, {opacity:0,})
    .to('.text-7', 5, {opacity:0, y:-100})


    let scene7 = new ScrollMagic.Scene({
        triggerElement: '.text-7',
        triggerHook:0,
        duration: '20%',
        offset: '-420',
    })
    .addTo(controller)
    // .addIndicators()
    .setPin('.text-7')
    .setTween(tl7)




    
    //////////////////
    let tl8 = new TimelineMax()
    tl8
    .from('.tl-1', 1, {opacity:0, x:50},'+=2.5')
    .from('.scroll-top', .5, {opacity:0,y:100},'-=0.5')
    .from('.bottom-cv', .5, {opacity:0,x:-100},'-=0.5')
    .from('.hire', 1, {opacity:0,scale:100},'+=2')

    let scene8 = new ScrollMagic.Scene({
        triggerElement: '.text-8',
        triggerHook:0,
        duration: '0%',
        offset: '-248',
    })
    .addTo(controller)
    // .addIndicators()
    .setPin('.text-8')
    .setTween(tl8)
})


function toTop(e) {
    window.scrollTo(0,0)
}