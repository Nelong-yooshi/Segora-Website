console.clear();
gsap.registerPlugin(SplitText, ScrollTrigger);

const split = new SplitText(".wrapper-split p", {
  type: "words",
  wordsClass: "word"
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#textSection",
    start: "top-=100 top",
    end: "+=200%",
    pin: true,
    scrub: true,
    markers: false
  }
});

tl.set(split.words, {
  opacity: 1,
  stagger: 0.1
}, 0.1);

tl.to({}, {
  duration: 1,
});