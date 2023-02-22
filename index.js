gsap.from(".logo", {
    x:-300, 
    duration: 2,
    // autoAlpha: 0,
});
gsap.from(".menu-links ul li", {
    autoAlpha:0, 
    // autoAlpha:1, 
    duration:4,
    stagger:0.1, 
    delay:1,
});
gsap.to(".title", {
    opacity:1, 
    duration:3, 
    delay:2,
});
gsap.to(".title", {
    opacity:1, 
    duration:3, 
    delay:2,
});
gsap.to(".tagline",{
    y: -40, 
    autoAlpha:0, 
    autoAlpha:1, 
    duration:2, 
    delay:2,
});
gsap.to(".desc",{
    y: -40, 
    autoAlpha:0, 
    autoAlpha:1, 
    duration:2, 
    delay:2,
});
gsap.from(".beer",{
    autoAlpha: 0,
    delay: 4,
    duration: 2,
    y: -100, stagger:01,      
});

gsap.from(".beer img", {
delay:5,
y:20,
ease: "BounceInOut",
repeat: -1, // -1 infinity loops
yoyo: true,
repeatDelay: 3 // delay within each repeat)
})
