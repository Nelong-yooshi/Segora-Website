console.clear();

// 確保 GSAP Plugin 被註冊
gsap.registerPlugin(ScrollTrigger);

// 等待頁面載入完畢再啟動動畫
window.addEventListener("load", () => {
    ScrollTrigger.create({
    trigger: ".main-image",
    start: "top 80%", // 當圖片進入畫面時觸發
    once: true,
    onEnter: () => {
      gsap.fromTo(
        ".main-image",
        {
          y: "-200%",
          opacity: 0
        },
        {
          y: "-50%",
          opacity: 1,
          duration: 0.6,
          ease: "back.out" // 彈跳感進場
        }
      );
    }
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper-pin",        // 當滾動到 .wrapper_pin 時啟動動畫
        start: "top top",           // 當 .wrapper_pin 頂部對齊視窗頂部時開始
        end: "+=150%",              // 持續 150% 視窗高度
        pin: true,                  // 固定 .wrapper_pin 區塊
        scrub: true,                // 滾動滑順同步動畫
        markers: false               // 顯示測試用的定位標記（可關掉）
      }
    })
    // .to(".hero-image", {
    //   scale: 2,
    //   z: 350,
    //   transformOrigin: "center center",
    //   ease: "power1.inOut"
    // })
    .to(
      ".main-image",
      {
        scale: 1.2,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      // "<" // 與前一個動畫同時執行
    );
});