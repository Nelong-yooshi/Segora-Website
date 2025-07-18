console.clear();

// 確保 GSAP Plugin 被註冊
gsap.registerPlugin(ScrollTrigger);

// 等待頁面載入完畢再啟動動畫
window.addEventListener("load", () => {
  const image = document.querySelector(".main-image-unsupport");

  if (!image.complete) {
    image.addEventListener("load", () => setupScrollAnimations());
  } else {
    setupScrollAnimations();
  }

  function setupScrollAnimations() {
    // 圖片進場動畫
    ScrollTrigger.create({
        trigger: ".main-image-unsupport",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.fromTo(
            ".main-image-unsupport",
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

    let hue = 0;
    gsap.to({}, {
        duration: 20,
        repeat: -1,
        ease: "linear",
        onUpdate: () => {
        hue += 1;                  // 調整速度
        if (hue > 360) hue -= 360; // 循環0~360
        gsap.set(".main-image-unsupport", {
            filter: `hue-rotate(${hue}deg) saturate(150%) brightness(1.1)`
            }
        );
        }
    });
  }
});