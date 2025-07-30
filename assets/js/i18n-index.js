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
          if (key === 'core_principles_description') {
            el.innerHTML = data[key];
            if (el.splitInstance) el.splitInstance.revert(); // 如果有 splitText，先還原
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
          } else {
            el.textContent = data[key];
          }
        }
      });
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'en';
  const defaultLang = ['zh', 'en', 'jp'].includes(savedLang) ? savedLang : 'en';
  setLanguage(defaultLang);
});