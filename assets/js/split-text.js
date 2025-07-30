console.clear();
gsap.registerPlugin(SplitText, ScrollTrigger);

const el = document.querySelector(".wrapper-split p");
const split = new SplitText(el, {
  type: "words",
  wordsClass: "word"
});
el.splitInstance = split;

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
tl.to({}, { duration: 1 });