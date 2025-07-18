console.clear();

// 確保 GSAP Plugin 被註冊
gsap.registerPlugin(ScrollTrigger);

// 等待頁面載入完畢再啟動動畫
window.addEventListener("load", () => {
  const image = document.querySelector(".main-image-support");

  if (!image.complete) {
    image.addEventListener("load", () => setupScrollAnimations());
  } else {
    setupScrollAnimations();
  }

  function setupScrollAnimations() {
    // 圖片進場動畫
    ScrollTrigger.create({
      trigger: ".main-image-support",
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          ".main-image-support",
          {
            y: "-200%",
            opacity: 0
          },
          {
            y: "-50%",
            opacity: 1,
            duration: 0.6,
            ease: "back.out"
          }
        );
      }
    });

    // pin 和縮放動畫
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".wrapper-pin",
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
          markers: false
        }
      })
      .to(".main-image", {
        scale: 1.2,
        transformOrigin: "center center",
        ease: "power1.inOut"
      });
  }
});