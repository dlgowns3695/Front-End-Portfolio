
document.addEventListener('DOMContentLoaded', function() {
  
  

  const sceneInfo = [
    // 0 빙하
    {
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0, // 여러 DEVICE에서 열때 높이값을 다르게 해주기 위해 초기값 0
      objs: {
        canvas: document.querySelector("#video-canvas-0"),
        context: document.querySelector("#video-canvas-0").getContext("2d"),
        videoImages: [], // 이미지 담아줄 배열
      },
      values: {
        videoImageCount: 71, // 이미지 개수
        imageSequence: [0, 70], // 이미지 범위
      },
    },
    // 1 콰이어트 플레이스 
    { 
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        canvas: document.querySelector("#video-canvas-1"),
        context: document.querySelector("#video-canvas-1").getContext("2d"),
        videoImages: [],
      },
      values: {
        videoImageCount: 52,
        imageSequence: [0, 51],
      },
    },
    // 2 이케아 
    {  
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        canvas: document.querySelector("#video-canvas-2"),
        context: document.querySelector("#video-canvas-2").getContext("2d"),
        videoImages: [],
      },
      values: {
        videoImageCount:51,
        imageSequence: [0, 50],

      },
  
    },
    // 3 콘택트 예정
    {
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        canvas: document.querySelector("#video-canvas-3"),
        context: document.querySelector("#video-canvas-3").getContext("2d"),
        videoImages: [],
      },
      values: {
        videoImageCount: 24,
        imageSequence: [0, 23],

      },
  
    },
    // 4 이디야
    { 
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        canvas: document.querySelector("#video-canvas-3"),
        context: document.querySelector("#video-canvas-3").getContext("2d"),
        videoImages: [],
      },
      values: {
        videoImageCount: 52,
        imageSequence: [0, 51],
      },
    },

    // 5 GPT
    { 
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        canvas: document.querySelector("#video-canvas-gpt"),
        context: document.querySelector("#video-canvas-gpt").getContext("2d"),
        videoImages: [],
      },
      values: {
        videoImageCount: 55,
        imageSequence: [0, 54],
      },
    },
    
  ];
  


  let images = [];
  
  // Scene 0 피씨 이미지 로드
  for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
    let result = `${i}`.padStart(1, "0");
    images.push(`video/001/0(${result}).webp`);
  }

  // 콰이어트플레이스 피씨
  for (let i = 0; i < sceneInfo[1].values.videoImageCount; i++) {
    let result = `${i}`.padStart(0, "0");
    images.push(`video/quietplace/quietplace(${result}).webp`);
  }

  // 이케아 피씨
  for (let i = 0; i < sceneInfo[2].values.videoImageCount; i++) {
    let result = `${i}`.padStart(0, "0");
    images.push(`video/ikea/IKEA(${result}).webp`);
  }

  // 콘택트 피씨
  for (let i = 0; i < sceneInfo[3].values.videoImageCount; i++) {
    let result = `${i}`.padStart(0, "0");
    images.push(`video/bubble/Bubble(${result}).webp`);
  }

  // 이디야 피씨
  for (let i = 0; i < sceneInfo[4].values.videoImageCount; i++) {
    let result = `${i}`.padStart(0, "0");
    images.push(`video/ediya/ediya(${result}).webp`);
  }


  // 이디야 피씨
  for (let i = 0; i < sceneInfo[5].values.videoImageCount; i++) {
    let result = `${i}`.padStart(0, "0");
    images.push(`video/chatGPT/chatGPT(${result}).webp`);
  }



  // 모바일 ******************


  // Scene 0 모바일 이미지 로드
  for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
    let result = `${i}`.padStart(1, "0");
    images.push(`video/001/0(${result}).webp`);
  }

  // 콰이어트플레이스 모바일
  for (let i = 0; i < sceneInfo[1].values.videoImageCount; i++) {
    let result = `${i}`.padStart(0, "0");
    images.push(`video/mobile/QUIETPLACE/QUIETPLACEmobile(${result}).webp`);
  }

  // 이케아 모바일
  for (let i = 0; i < sceneInfo[2].values.videoImageCount; i++) {
    let result = `${i}`.padStart(0, "0");
    images.push(`video/mobile/IKEA/IKEAmobile(${result}).webp`);
  }

  // 콘택트 모바일
  for (let i = 0; i < sceneInfo[3].values.videoImageCount; i++) {
    let result = `${i}`.padStart(0, "0");
    images.push(`video/mobile/Bubble/Bubble(${result}).webp`);
  }

  // 이디야 모바일
  for (let i = 0; i < sceneInfo[4].values.videoImageCount; i++) {
    let result = `${i}`.padStart(0, "0");
    images.push(`video/mobile/EDIYA/EDIYAMobile(${result}).webp`);
  }

  // 이디야 모바일
  for (let i = 0; i < sceneInfo[5].values.videoImageCount; i++) {
    let result = `${i}`.padStart(0, "0");
    images.push(`video/mobile/chatGPT/chatGPT(${result}).webp`);
  }




  let container = document.querySelector('.loading'),
      progresstext = container.querySelector('.loading-percent'),
      loadingIcons = container.querySelectorAll('.loading-icons'),
      loadingfigure = container.querySelector('.loading-figure');

      // imgLoad = imagesLoaded(document.body),
  let  imgTotal = images.length, // 로드해야 할 총 이미지 수
     
      imgLoaded = 0,        // 현재 로드된 이미지 수
      current = 0,          // 현재 진행 상태
      iconIndex = 0;        // 현재 표시할 아이콘 인덱스 저장할 곳

  let progressTimer = setInterval(updateProgress, 1000 / 60);
  let iconTimer = setInterval(updateIcons, 300); // 0.2초마다 아이콘 변경

  let loadingChk = 0; // 로딩이 됐는지 체크하기 위함
  // console.log(imgTotal);

   // 이미지 로드 상태 추적
   images.forEach(function(src) {
    let img = new Image();
    img.src = src;
    img.onload = img.onerror = function() {
      imgLoaded++;
      // console.log(imgLoaded);
    };
  });

  // 진행률부분
  function updateProgress() {
    // 타겟 = 이미지 로드 된 수 / 전체 수  * 100 (백분율)
      let target = (imgLoaded / imgTotal) * 101;
      // 현재 진행 상태
      current += (target - current) * 0.03;

      progresstext.textContent = Math.floor(current) + "%";

      // progresstext의 위치를 업데이트합니다.
      let newPosition = (current / 100) * 60; // 초기 위치에서 위로 이동
      gsap.to(progresstext, {
          duration: 0.1,
          y: -newPosition + "vh"
      });

      if(current >96){
        clearInterval(iconTimer);
        gsap.to(loadingfigure, {
          duration: 0.2,
          gap: "0",
          opacity: 0,
          
        });

      }
      if(current >99){
        gsap.to('.loading-logo', {
          duration: 0.5,
          top:'50%',
          transform:'translate(-50%, -50%)',
          opacity: 0,
    
      });

      }
      // 99.9보다 커질때 까지
      if (current > 100) {
          
          clearInterval(progressTimer);
          // console.log("이미지가 로드1111되었습니다.");
          loadingChk = 1;
          // console.log(loadingChk + ' << loadingChk ');
          

          // 순차적으로 아이콘 표시하기
          // showIconsSequentially();

          // 여기서 GSAP을 사용하여 로고와 백분율을 애니메이션화합니다.
          gsap.to(container, {
              duration: 0.7,
              opacity: 0,
              // 완료시 위로 클래스 추가 밑
              onComplete: function() {
                
                  // container.classList.add("progress-complete");
                  gsap.to(container, {
                      duration: 0.5,
                      top: "-100%",
                      ease: "easeInOutQuint",
                      delay: 0.3 , 
                  }); 
              }
          });
      }
  }

  // 아이콘 변경 함수
  function updateIcons() {
      loadingIcons.forEach(function(icon, index) {
          icon.style.display = (index === iconIndex) ? 'block' : 'none';
      });
      iconIndex = (iconIndex + 1) % loadingIcons.length;
  }

});






  