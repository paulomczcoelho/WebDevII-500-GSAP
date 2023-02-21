gsap.to(".logo", {rotation:0, x:100, duration: 3});
gsap.to(".title", {opacity:1, duration:1, delay:2})
gsap.fromTo(".menu-links ul li", {autoAlpha:0}, {autoAlpha:1, duration:1,
    stagger:{each:01, from:"start", ease:"power4.out"}
})



gsap.from('.beer',{autoAlpha: 0,
delay: 0.3,
duration: 2,
y: -100})
gsap.from('img', {
    // ease: "power4.out"
    ease: "bounce",
    repeat: -1, // -1 infinity loops
    yoyo: true,
    repeatDelay: 2 // delay within each repeat
})
