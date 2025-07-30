function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  loadLanguage(lang);
  document.documentElement.lang = lang;
}

function loadLanguage(lang) {
  fetch(`/lang/index/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
          el.innerHTML = data[key];
        }
      });


      setTimeout(() => resetSplitTextAnimation(), 0);
    });
}

let split;
let tl;

function resetSplitTextAnimation() {
  if (tl) {
    tl.kill();
    tl = null;
  }

  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  if (split) {
    split.revert();
    split = null;
  }

  split = new SplitText(".wrapper-split p", {
    type: "words",
    wordsClass: "word"
  });

  tl = gsap.timeline({
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
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'en';
  const defaultLang = ['zh', 'en', 'jp'].includes(savedLang) ? savedLang : 'en';
  setLanguage(defaultLang);
});