
// function updateScroller() {
    
//     const scrollY = window.scrollY;
//     const viewportHeight = window.innerHeight;
//     const documentHeight = document.documentElement.scrollHeight;
//     // console.log(documentHeight)

//     const top = Math.round((scrollY / (documentHeight - viewportHeight)) * 100);
//     const bottom = Math.round(
//         ((scrollY + viewportHeight - documentHeight) /
//         (documentHeight - viewportHeight)) *
//         100
//     );

//     document.querySelector(".one").textContent = `${top} PSI`;
//     document.querySelector(".two").textContent = `심해까지 ${bottom} M`;

//     const rulerLines = document.querySelector('.rulerLines');
//     // rulerLines.style.top = `${-documentHeight}px`;

//     // console.log('리사이즈 및 스크롤함')
    
// }

// window.addEventListener("scroll", updateScroller);
// window.addEventListener("resize", updateScroller);

// updateScroller();



function updateScroller() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
  
    const top = Math.round((scrollY / (documentHeight - viewportHeight)) * 100);
    const bottom = Math.round(
      ((scrollY + viewportHeight - documentHeight) /
        (documentHeight - viewportHeight)) *
        100
    );
  
    document.querySelector(".one").textContent = `${top} PSI`;
    document.querySelector(".two").textContent = `심해까지 ${bottom} M`;
  
    
  }
  
  window.addEventListener("scroll", updateScroller);
  window.addEventListener("resize", updateScroller);
  updateScroller();