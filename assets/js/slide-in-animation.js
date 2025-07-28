gsap.registerPlugin(ScrollTrigger);

gsap.from(".from-left", {
  scrollTrigger: {
    trigger: ".from-left",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});


gsap.from(".from-right", {
  scrollTrigger: {
    trigger: ".from-right",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".blur-in1", {
  scrollTrigger: {
    trigger: ".blur-in1",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  filter: "blur(10px)",
  duration: 1
});

gsap.from(".blur-in2", {
  scrollTrigger: {
    trigger: ".blur-in2",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  filter: "blur(10px)",
  duration: 1
});