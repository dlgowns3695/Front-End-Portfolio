
// function updateScroller() {
//     const scrollY = window.scrollY;
//     const viewportHeight = window.innerHeight;
//     const documentHeight = document.documentElement.scrollHeight;
  
//     const top = Math.round((scrollY / (documentHeight - viewportHeight)) * 100);
//     const bottom = Math.round(
//       ((scrollY + viewportHeight - documentHeight) /
//         (documentHeight - viewportHeight)) *
//         100
//     );
  
//     document.querySelector(".psi").textContent = `${top} PSI`;
//     document.querySelector(".miusM").textContent = `심해까지 ${bottom} M`;
  
    
//   }
  
//   window.addEventListener("scroll", updateScroller);
//   window.addEventListener("resize", updateScroller);
//   updateScroller();

function updateScroller() {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // 스크롤 상단과 하단 퍼센트 계산
  const top = Math.round((scrollY / (documentHeight - viewportHeight)) * 100);
  const bottom = Math.round(
    ((scrollY + viewportHeight - documentHeight) /
      (documentHeight - viewportHeight)) *
      100
  );

  // PSI와 M 업데이트
  document.querySelector(".psi").textContent = `${top} PSI`;
  document.querySelector(".miusM").textContent = `심해까지 ${bottom} M`;

  // 스크롤 인디케이터의 위치 업데이트 (상단 0%, 하단 100% 가정)
  const rulerHeight = document.querySelector(".rulerLines").offsetHeight;
  const indicator = document.querySelector(".scroll-indicator");

  // 인디케이터의 위치를 스크롤 퍼센트에 맞게 조정
  const indicatorTop = (scrollY / (documentHeight - viewportHeight)) * (rulerHeight - indicator.offsetHeight);
  indicator.style.top = `${indicatorTop}px`;
}

window.addEventListener("scroll", updateScroller);
window.addEventListener("resize", updateScroller);
updateScroller();