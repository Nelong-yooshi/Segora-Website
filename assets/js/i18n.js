function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  loadLanguage(lang);
  document.documentElement.lang = lang;
}

function loadLanguage(lang) {
  fetch(`/lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
          el.textContent = data[key];
        }
      });
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'en';
  const defaultLang = ['zh', 'en'].includes(savedLang) ? savedLang : 'en';
  setLanguage(defaultLang);
});