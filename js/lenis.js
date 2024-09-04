// 추후에 인트로 에러 생길 경우 참고 할 사이트 https://duektmf34.tistory.com/207
// gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
    // 추가된 부분
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);