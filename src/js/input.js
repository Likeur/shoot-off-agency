import { gsap } from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Mouse follower

// let cursor = document.querySelector('#mouse_follow')

// let mouseX
// let mouseY

// window.addEventListener('mousemove', (e)=>{
//     mouseX = e.clientX
//     mouseY = e.clientY

//     gsap.to(cursor, {
//         x:mouseX, 
//         y:mouseY, 
//         duration:0.5
//     })
// })



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

// reveal animation timeline

const tl = gsap.timeline()
tl.from('#intro span',{
    opacity:0,
    y:200,
    rotate:'45deg',
    stagger:{amount:0.7},
    duration:1,
    ease:'expo.out'
}).to('#intro span',{
    opacity:0,
    stagger:{amount:0.7},
    duration:0.8,
    ease:'expo.out'
}).to('#introbox',{
    scaleY:0,
    transformOrigin:'top',
    duration: 0.8,
    ease:'sine.out'
}).from('#logo, #link1, #link2, #link3,.word, #rdvbtn, #btntarif, #btnrdv2, #menubtn, #herobox1,#herobox2,#herobox3,#herobox4',{
    y:50,
    opacity:0,
    stagger:{amount:0.8},
    duration:0.8
})

// scroll animation timeline for intro

const scrolltl = gsap.timeline({
    scrollTrigger:{
        trigger:'#hero',
        start:'-15% top',
        end:'bottom top',
        scrub:true,
    }
})

scrolltl.to('#herotext',{
    scale:0.5,
    opacity:0
}).to('#heroparagraph, #btntarif, #btnrdv2',{
    y:100,
    opacity:0
}, "<").to('#herobox1,#herobox2,#herobox3,#herobox4',{
    y:-200,
}, "<")

// scroll animation timeline for logo partnair

const logotl = gsap.timeline({
    scrollTrigger:{
        trigger:'#logoSection',
        start:'top 80%',
        end:'bottom 55%',
        scrub:true,
        markers:true
    }
})

logotl.from('#logopara, #logoimg1,#logoimg2,#logoimg3,#logoimg4',{
    y:200,
    opacity:0,
    stagger: {amount:0.5},
    duration:0.8, 
})


