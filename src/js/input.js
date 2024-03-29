import { gsap } from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Mouse follower

let cursor = document.querySelector('#mouse_follow')

let mouseX
let mouseY

window.addEventListener('mousemove', (e)=>{
    mouseX = e.clientX
    mouseY = e.clientY

    gsap.to(cursor, {
        x:mouseX, 
        y:mouseY, 
        duration:0.5
    })
})
window.addEventListener('mouseleave', () =>{
    mouseX = 1
    mouseY = 1

    gsap.to(cursor, {
        x:mouseX, 
        y:mouseY, 
        duration:0.5
    })
})



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

// gsap.set('.btntarifs,.btnrdvv2',{
//     y:50,
//     opacity:0,
// })
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
}).from('#logo, #link1, #link2, #link3,.word, #rdvbtn, #menubtn,#btnBox, #herobox1,#herobox2,#herobox3,#herobox4',{
    y:50,
    opacity:0,
    stagger:{amount:0.8},
    duration:0.8
})

// .to('.btntarifs, .btnrdvv2',{
//     y:0,
//     opacity: 1,
//     stagger:{amount:0.01},
//     duration:0.5
// })

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
}).to('#heroparagraph',{
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
    }
})

logotl.from('#logopara, #logoimg1,#logoimg2,#logoimg3,#logoimg4',{
    y:200,
    opacity:0,
    stagger: {amount:0.5},
    duration:0.8, 
})

// scroll animation timeline for work section

const worktl = gsap.timeline({
    scrollTrigger:{
        trigger:'#project_section',
        start:'top 85%',
        end:'bottom 60%',
        scrub:true,
    }
})

worktl.from('#worktext',{
    y:100,
    opacity:0
}).from('#work1,#work2,#work3,#work4',{
    y:100,
    opacity:0,
    stagger:0.1
}).from('#work5,#work6,#work7,#work8',{
    y:100,
    opacity:0,
    stagger:0.1
})

// scroll animation timeline for pricing section


const pricetl = gsap.timeline({
    scrollTrigger:{
        trigger:'#pricing',
        start:'top 85%',
        end:'bottom 60%',
        scrub:true,
    }
})

pricetl.from('#pricingtext',{
    y:100,
    opacity:0
}).from('#pricing1,#pricing2,#pricing3,#pricing4',{
    y:100,
    opacity:0,
    stagger:0.1
})

// scroll animation timeline for CTA section

const ctatl = gsap.timeline({
    scrollTrigger:{
        trigger:'#cta',
        start:'top 85%',
        end:'bottom 70%',
        scrub:true,
    }
})

ctatl.from('#ctabox',{
    scale:1.4,
    y:100,
    opacity:0
})
