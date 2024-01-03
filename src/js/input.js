import { gsap } from "gsap"

// Mouse follower

// for the amburguer menu
const btnMenu = document.querySelector('#menubtn')
const barUn = document.querySelector('#bar-1')
const barDeux = document.querySelector('#bar-2')
const menu = document.querySelector('#menu')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('scale-0')
    barUn.classList.toggle('rotate-45')
    barUn.classList.toggle('absolute')
    barDeux.classList.toggle('mt-2')
    barDeux.classList.toggle('-rotate-45')
})

const myHeroText = new SplitType('#herotext')
const myHeroPara = new SplitType('#heroparagraph')

gsap.from('#logo, #link1, #link2, #link3,.word, #rdvbtn, #btntarif, #btnrdv2, #menubtn, #herobox1,#herobox2,#herobox3,#herobox4',{
    y:-60,
    opacity:0,
    stagger:{amount:2},
    duration:0.8
})

// gsap.from('',{
//     y:-125,
//     opacity:0,
//     stagger:{amount:1},
//     duration:0.5 
// })
