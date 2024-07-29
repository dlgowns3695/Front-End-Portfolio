







// 젤 처음 로드
document.addEventListener('DOMContentLoaded', function() {
  /* 즉시 호출 함수*/

  // (() => {})();

  let yOffset = 0; // window.scrollY 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스크롤 위치 window.scrollY보다 이전에 위치한 스크롤 섹션들의 스크롤 높이의 합
  let currentScene = 0; // 현재 활성화된 섹션
  let enterNewscene = false; // 새로운 섹션이이 시작되는 순간 

  // let test = document.querySelector('#scroll-section-2 .quietplaceGsapContainer .languageDecDiv p')[1];


  let checkPCMobile = 0 // 피씨0, 노트북1, 패드2, 모바일,3
  // let prevCheckPCMobile = checkPCMobile; // 이전 상태 저장


  const sceneInfo = [
    {
      // 0
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0, // 여러 DEVICE에서 열때 높이값을 다르게 해주기 위해 초기값 0
      objs: {
        container1: document.querySelector("#show-scene-0 #scroll-section-0"),
        container: document.querySelector("#scroll-section-0"),
        messageA: document.querySelector("#scroll-section-0 .main-message.a"),
        messageB: document.querySelector("#scroll-section-0 .main-message.b"),

        logoPosContainer: document.querySelector(".logoPosContainer"),
        // document.querySelectorAll("#scroll-section-0 .logoPosContainer .Pos img"), NodeList
        logo1: document.querySelector("#scroll-section-0 .logoPosContainer .Pos .QUIETPLACElogo1 img"),
        logo2: document.querySelector("#scroll-section-0 .logoPosContainer .Pos .IKEAlogo2 img"),
        // logo3: document.querySelector("#scroll-section-0 .logoPosContainer .Pos .QUIETPLACElogo3 img"),
        logo4: document.querySelector("#scroll-section-0 .logoPosContainer .Pos .LEAGUEofLEGENDslogo4 img"),
        logo5: document.querySelector("#scroll-section-0 .logoPosContainer .Pos .QUIETPLACElogo5 img"),
        section0Bg: document.querySelector("#scroll-section-0 .bg"),

        canvas: document.querySelector("#video-canvas-0"),
        context: document.querySelector("#video-canvas-0").getContext("2d"),
        videoImages: [], // 이미지 담아줄 배열
      },
      values: {
        videoImageCount: 141, // 이미지 개수
        imageSequence: [0, 140], // 이미지 범위

      messageA_opacity_in: [0, 1, { start: 0.3, end: 0.5 }], // opacity 0에서 1로
      messageA_opacity_out: [1, 0, { start: 0.55, end: 0.6 }], // opacity 0에서 1로
      messageA_translateY_in: [20, 0, { start: 0.3, end: 0.4 }], // translate는 내 크기만큼 % 20%정도만
      messageA_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],


      messageB_opacity_in: [0, 1, { start: 0.6, end: 0.8 }], // opacity 0에서 1로
      messageB_opacity_out: [1, 0, { start: 0.85, end: 0.9 }], // opacity 0에서 1로
      messageB_translateY_in: [20, 0, { start: 0.6, end: 0.7 }], // translate는 내 크기만큼 % 20%정도만
      messageB_translateY_out: [0, -20, { start: 0.75, end: 0.8 }],


      logoPosContainer_opacity_in: [0, 1, { start: 0.6, end: 0.8 }], // opacity 0에서 1로
      logoPosContainer_opacity_out: [1, 0, { start: 0.85, end: 0.9 }], // opacity 0에서 1로
      logoPosContainer_translateY_in: [20, 0, { start: 0.6, end: 0.7 }], // translate는 내 크기만큼 % 20%정도만
      logoPosContainer_translateY_out: [0, -20, { start: 0.75, end: 0.8 }],
      },
    },
    {
      // 1
      type: "normal",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      // 2, 콰이어트 플레이스 예정
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-2"),

        link: document.querySelector("#scroll-section-2 .quietplaceGsapContainer .moreBtnarea"),

        messageP1A: document.querySelector("#scroll-section-2 .quietplaceGsapContainer .p1 .decP1"),
        messageP1B: document.querySelector("#scroll-section-2 .quietplaceGsapContainer .p1 .decP2"),
        messageP1C: document.querySelector("#scroll-section-2 .quietplaceGsapContainer .p1 .decP3"),

        messageP2A: document.querySelector("#scroll-section-2 .quietplaceGsapContainer .p2 .decP1"),
        messageP2B: document.querySelector("#scroll-section-2 .quietplaceGsapContainer .p2 .decP2"),
        messageP2C: document.querySelector("#scroll-section-2 .quietplaceGsapContainer .p2 .decP3"),
        messageP2D: document.querySelector("#scroll-section-2 .quietplaceGsapContainer .p2 .decP4"),

        messageF: document.querySelector("#scroll-section-2 .quietplaceGsapContainer .quietplaceH1"),
        messageG: document.querySelector("#scroll-section-2 .quietplaceGsapContainer .quietplaceH1 .quietplaceDec"),
        pinB: document.querySelector("#scroll-section-2 .b .pin"),
        pinC: document.querySelector("#scroll-section-2 .c .pin"),
        canvas: document.querySelector("#video-canvas-1"),
        context: document.querySelector("#video-canvas-1").getContext("2d"),
        videoImages: [],
      },
      values: {
          videoImageCount: 206,
          imageSequence: [0, 205],

        messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
        messageP1A_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
        messageP1B_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
        messageP1C_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],


        messageP2A_translateY_in: [20, 0, { start: 0.55, end: 0.6 }],
        messageP2B_translateY_in: [20, 0, { start: 0.55, end: 0.6 }],
        messageP2C_translateY_in: [20, 0, { start: 0.55, end: 0.6 }],
        messageP2D_translateY_in: [20, 0, { start: 0.55, end: 0.6 }],

        // messageE_translateY_in: [20, 0, { start: 0.55, end: 0.6 }],
        messageF_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
        messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],

        
        messageP1A_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
        messageP1B_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
        messageP1C_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],


        messageP2A_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],
        messageP2B_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],
        messageP2C_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],
        messageP2D_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],

        // messageE_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],
        messageF_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
        messageG_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
        link_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],

        messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
        messageP1A_translateY_out: [0, -20, { start: 0.4, end: 0.45 }],
        messageP1B_translateY_out: [0, -20, { start: 0.4, end: 0.45 }],
        messageP1C_translateY_out: [0, -20, { start: 0.4, end: 0.45 }],


        messageP2A_translateY_out: [0, -20, { start: 0.8, end: 0.9 }],
        messageP2B_translateY_out: [0, -20, { start: 0.8, end: 0.9 }],
        messageP2C_translateY_out: [0, -20, { start: 0.8, end: 0.9 }],
        messageP2D_translateY_out: [0, -20, { start: 0.8, end: 0.9 }],



        // messageE_translateY_out: [0, -20, { start: 0.8, end: 0.9 }],
        messageF_translateY_out: [0, -20, { start: 0.8, end: 0.9 }],
        
        messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
        messageP1A_opacity_out: [1, 0, { start: 0.4, end: 0.45 }],
        messageP1B_opacity_out: [1, 0, { start: 0.4, end: 0.45 }],
        messageP1C_opacity_out: [1, 0, { start: 0.4, end: 0.45 }],


        messageP2A_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
        messageP2B_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
        messageP2C_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
        messageP2D_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],



        // messageE_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
        messageF_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
        messageG_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],

        link_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],

        pinB_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
        pinC_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
        pinB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
        pinC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
        pinB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
        pinC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      },
    },
    {
      // 3 이케아 예정
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),

        link: document.querySelector("#scroll-section-3 .ikeaGsapContainer .moreBtnarea"),

        messageP1A: document.querySelector("#scroll-section-3 .ikeaGsapContainer .p1 .decP1"),
        messageP1B: document.querySelector("#scroll-section-3 .ikeaGsapContainer .p1 .decP2"),
        messageP1C: document.querySelector("#scroll-section-3 .ikeaGsapContainer .p1 .decP3"),

        messageP2A: document.querySelector("#scroll-section-3 .ikeaGsapContainer .p2 .decP1"),
        messageP2B: document.querySelector("#scroll-section-3 .ikeaGsapContainer .p2 .decP2"),
        messageP2C: document.querySelector("#scroll-section-3 .ikeaGsapContainer .p2 .decP3"),
        messageP2D: document.querySelector("#scroll-section-3 .ikeaGsapContainer .p2 .decP4"),

        messageF: document.querySelector("#scroll-section-3 .ikeaGsapContainer .ikeaH1"),
        messageG: document.querySelector("#scroll-section-3 .ikeaGsapContainer .ikeaH1 .ikeaDec"),

        canvas: document.querySelector("#video-canvas-2"),
        context: document.querySelector("#video-canvas-2").getContext("2d"),
        videoImages: [],
      },
      values: {
        videoImageCount: 204,
        imageSequence: [0, 203],

        messageP1A_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
        messageP1B_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
        messageP1C_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],


        messageP2A_translateY_in: [20, 0, { start: 0.55, end: 0.6 }],
        messageP2B_translateY_in: [20, 0, { start: 0.55, end: 0.6 }],
        messageP2C_translateY_in: [20, 0, { start: 0.55, end: 0.6 }],
        messageP2D_translateY_in: [20, 0, { start: 0.55, end: 0.6 }],
        messageF_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],

        messageP1A_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
        messageP1B_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
        messageP1C_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],


        messageP2A_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],
        messageP2B_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],
        messageP2C_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],
        messageP2D_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],
        messageF_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
        messageG_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],

        link_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],

        messageP1A_translateY_out: [0, -20, { start: 0.4, end: 0.45 }],
        messageP1B_translateY_out: [0, -20, { start: 0.4, end: 0.45 }],
        messageP1C_translateY_out: [0, -20, { start: 0.4, end: 0.45 }],


        messageP2A_translateY_out: [0, -20, { start: 0.8, end: 0.9 }],
        messageP2B_translateY_out: [0, -20, { start: 0.8, end: 0.9 }],
        messageP2C_translateY_out: [0, -20, { start: 0.8, end: 0.9 }],
        messageP2D_translateY_out: [0, -20, { start: 0.8, end: 0.9 }],
        messageF_translateY_out: [0, -20, { start: 0.8, end: 0.9 }],

        messageP1A_opacity_out: [1, 0, { start: 0.4, end: 0.45 }],
        messageP1B_opacity_out: [1, 0, { start: 0.4, end: 0.45 }],
        messageP1C_opacity_out: [1, 0, { start: 0.4, end: 0.45 }],


        messageP2A_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
        messageP2B_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
        messageP2C_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
        messageP2D_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
        messageF_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
        messageG_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],

        link_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],

      },

    },
    {
    
      // 4
      type: "normal",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-4"),
        // messageA: document.querySelectorAll("#scroll-section-4 .a li"),
        // messageB: document.querySelectorAll("#scroll-section-4 .b li"),
        // messageC: document.querySelectorAll("#scroll-section-4 .c li"),
      },
      values : {
        // messageA_translateX_in: [[-5, 0, { start: 0.15, end: 0.2 }], [-5, 0, { start: 0.18, end: 0.23 }], [-5, 0, { start: 0.21, end: 0.26 }], [-5, 0, { start: 0.24, end: 0.29 }]],
        // messageA_translateX_out: [[0, 5, { start: 0.3, end: 0.35 }],[0, 5, { start: 0.3, end: 0.35 }],[0, 5, { start: 0.3, end: 0.35 }],[0, 5, { start: 0.3, end: 0.35 }]],
        // messageA_opacity_in: [[0, 1, { start: 0.15, end: 0.2 }],[0, 1, { start: 0.18, end: 0.23 }],[0, 1, { start: 0.21, end: 0.26 }],[0, 1, { start: 0.24, end: 0.29 }]],
        // messageA_opacity_out: [[1, 0, { start: 0.3, end: 0.35 }],[1, 0, { start: 0.3, end: 0.35 }],[1, 0, { start: 0.3, end: 0.35 }],[1, 0, { start: 0.3, end: 0.35 }]],

        // messageB_translateX_in: [[5, 0, { start: 0.5, end: 0.55 }], [5, 0, { start: 0.53, end: 0.58 }], [5, 0, { start: 0.56, end: 0.61 }], [5, 0, { start: 0.59, end: 0.64 }]],
        // messageB_translateX_out: [[0, -5, { start: 0.58, end: 0.63 }],[0, -5, { start: 0.58, end: 0.63 }],[0, -5, { start: 0.58, end: 0.63 }],[0, -5, { start: 0.58, end: 0.63 }]],
        // messageB_opacity_in: [[0, 1, { start: 0.5, end: 0.55 }],[0, 1, { start: 0.53, end: 0.58 }],[0, 1, { start: 0.56, end: 0.61 }],[0, 1, { start: 0.59, end: 0.64 }]],
        // messageB_opacity_out: [[1, 0, { start: 0.58, end: 0.63 }],[1, 0, { start: 0.58, end: 0.63 }],[1, 0, { start: 0.58, end: 0.63 }],[1, 0, { start: 0.58, end: 0.63 }]],

        // messageC_translateX_in: [[-5, 0, { start: 0.72, end: 0.77 }], [-5, 0, { start: 0.75, end: 0.8 }], [-5, 0, { start: 0.78, end: 0.83 }], [-5, 0, { start: 0.81, end: 0.86 }]],
        // messageC_translateX_out: [[0, 5, { start: 0.85, end: 0.9 }],[0, 5, { start: 0.85, end: 0.9 }],[0, 5, { start: 0.85, end: 0.9 }],[0, 5, { start: 0.85, end: 0.9 }]],
        // messageC_opacity_in: [[0, 1, { start: 0.72, end: 0.77 }],[0, 1, { start: 0.75, end: 0.8 }],[0, 1, { start: 0.78, end: 0.83 }],[0, 1, { start: 0.81, end: 0.86 }]],
        // messageC_opacity_out: [[1, 0, { start: 0.85, end: 0.9 }],[1, 0, { start: 0.85, end: 0.9 }],[1, 0, { start: 0.85, end: 0.9 }],[1, 0, { start: 0.85, end: 0.9 }]],
      }
    },

    
    // {
    //   // 5 ,,  콘택트 전 카드들 예정
    //   type: "sticky",
    //   heightNum: 5,
    //   scrollHeight: 0,
    //   objs: {
    //     container: document.querySelector("#scroll-section-5"),

    //   },
    //   values : {

    //   }
    // },
    {
    // 5, contact ,, 이케아꺼로 임시방편
    type: "sticky",
    heightNum: 3,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-5"),

      // contact: document.querySelector("#scroll-section-0 .main-message.a"),

      canvas: document.querySelector("#video-canvas-3"),
      context: document.querySelector("#video-canvas-3").getContext("2d"),
      videoImages: [],
    },
    values: {
      videoImageCount: 297,
      imageSequence: [0, 296],
      canvas_opacity_in: [0, .3, { start: 0.05, end: 0.5 }],
      canvas_opacity_out: [.3, 0, { start: 0.85, end: 0.9 }],
    },
    
    }
    
    
  ];
  function getState() {
    const width = window.innerWidth;
    return width < 769 ? 1 : 0; // 모바일이면 1, PC이면 0 반환
  }

  const landingState = getState();
  // 사이즈 변할때 모바일,PC반응하기
  window.addEventListener('resize', function() {
    const currentState = getState();
    // console.log(landingState !== currentState)
    if (landingState !== currentState) {
      console.log("상태 변경, 500ms 후 새로고침");
      setTimeout(() => {
        window.location.reload();
      }, 500); // 500ms 딜레이 후 새로고침
    }
  });

  // 모바일, 데스크탑 체크
  function checkWindowSize() {

    const width = window.innerWidth;
    console.log(width)

    // 1600 보다 크면 피씨
    if (width > 1600) {
    
        document.body.classList.add('desktop');
        document.body.classList.remove('mobile');
        document.body.classList.remove('pad');
        document.body.classList.remove('laptop');
        // console.log('피씨입니다.')
        checkPCMobile = 0;
        console.log('checkPCMobile > ' + checkPCMobile)
      
    } 
    // 1024보다 작으면 노트북
    else if (width <=1600 && width > 1024) {
      
      document.body.classList.add('laptop');
      document.body.classList.remove('desktop');
      document.body.classList.remove('mobile');
      document.body.classList.remove('pad');
      // console.log('노트북입니다.')
      checkPCMobile = 1;
      console.log('checkPCMobile > ' + checkPCMobile)
    }
    
    // 768보다 크면 패드
    else if(width <=1024 && width >768) {
        document.body.classList.add('pad');
        document.body.classList.remove('desktop');
        document.body.classList.remove('mobile');
        document.body.classList.remove('laptop');
        // console.log('패드입니다.')
        checkPCMobile = 2;
        console.log('checkPCMobile > ' + checkPCMobile)
    }
    // 나머지 피씨
    else{
      
        document.body.classList.add('mobile');
        document.body.classList.remove('desktop');
        document.body.classList.remove('pad');
        document.body.classList.remove('laptop');
        // console.log('모바일입니다.')
        checkPCMobile = 3;
        console.log('checkPCMobile > ' + checkPCMobile)
    }


  }
  checkWindowSize();
  // 모바일,PC 배열에 푸쉬 (푸쉬 -> 그리기 순)
  function setCanvasImages() {
    
    // 모바일
    if(checkPCMobile === 3){
      // Scene 0 이미지 로드
      // refreshPageIfNeeded();
      for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
        let result = `${i}`.padStart(1, "0");
        let imgElem = new Image();
        imgElem.src = `video/001/${result}.webp`;
        // imgElem.onload = () => onImageLoad(0);
        sceneInfo[0].objs.videoImages.push(imgElem);
        
      }


      // 콰이어트플레이스 모바일
      let imgElem2;
      for (let i = 0; i < sceneInfo[2].values.videoImageCount; i++) {
        let result = `${i}`.padStart(0, "0");
        imgElem2 = new Image();
        imgElem2.src = `video/mobile/QUIETPLACE/QUIETPLACEmobile(${result}).png`;
        sceneInfo[2].objs.videoImages.push(imgElem2);
      }

      // 이케아 모바일
      let imgElem3;
      for (let i = 0; i < sceneInfo[3].values.videoImageCount; i++) {
        let result = `${i}`.padStart(0, "0");
        imgElem3 = new Image();
        imgElem3.src = `video/mobile/IKEA/IKEAmobile(${result}).png`;
        sceneInfo[3].objs.videoImages.push(imgElem3);
      }

      // 콘택트 모바일
      let imgElem4;
      for (let i = 0; i < sceneInfo[5].values.videoImageCount; i++) {
        let result = `${i}`.padStart(0, "0");
        imgElem4 = new Image();
        imgElem4.src = `video/mobile/Bubble/Bubble(${result}).png`;
        sceneInfo[5].objs.videoImages.push(imgElem4);
      }

    }

    else {
      // refreshPageIfNeeded();
      console.log('setCanvasImages 함수 PC버전 이미지 푸쉬완료');

      // Scene 0 이미지 로드
      let imgElem;
      for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
        let result = `${i}`.padStart(1, "0");
        imgElem = new Image();
        imgElem.src = `video/001/${result}.webp`;
        // imgElem.onload = () => onImageLoad(0);
        sceneInfo[0].objs.videoImages.push(imgElem);
      }
      
    
      // 콰이어트플레이스 피씨
      let imgElem2;
      for (let i = 0; i < sceneInfo[2].values.videoImageCount; i++) {
        let result = `${i}`.padStart(0, "0");
        imgElem2 = new Image();
        imgElem2.src = `video/004/quietplace(${result}).png`;
        sceneInfo[2].objs.videoImages.push(imgElem2);
      }


      // 이케아 피씨
      let imgElem3;
      for (let i = 0; i < sceneInfo[3].values.videoImageCount; i++) {
        let result = `${i}`.padStart(0, "0");
        imgElem3 = new Image();
        imgElem3.src = `video/005/IKEA(${result}).png`;
        sceneInfo[3].objs.videoImages.push(imgElem3);
      }

      // 콘택트 예정
      let imgElem4;
      for (let i = 0; i < sceneInfo[5].values.videoImageCount; i++) {
        let result = `${i}`.padStart(0, "0");
        imgElem4 = new Image();
        imgElem4.src = `video/006/Bubble(${result}).png`;
        sceneInfo[5].objs.videoImages.push(imgElem4);
      }
    }

  }


  // 캔버스들 모바일, 피씨에따라 사이즈 교체
  function canvasSize(){

    // const canvase0 = document.querySelector('#video-canvas-0');
    const canvase1 = document.querySelector('#video-canvas-1');
    const canvase2 = document.querySelector('#video-canvas-2');
    const canvase3 = document.querySelector('#video-canvas-3');
    
    switch(checkPCMobile){
      // 피씨 1920
      case 0:
        console.log('피씨요')
              // PC일 때
              canvase1.width = 1920;
              canvase1.height = 1080;
        
              canvase2.width = 1920;
              canvase2.height = 1080;

              canvase3.width = 1920;
              canvase3.height = 1080;

      break;
      // 노트북 1600
      case 1:
        console.log('노트북이요')
                    // PC일 때
                    canvase1.width = 1920;
                    canvase1.height = 1080;
              
                    canvase2.width = 1920;
                    canvase2.height = 1080;

                    canvase3.width = 1920;
                    canvase3.height = 1080;
      break;
      // 패드 1024
      case 2:
        console.log('패드요')
                    // PC일 때
                    sceneInfo[0].objs.canvas.style.transform = 'translate3d(-50%, -50%, 0px) scale(1)';
                    canvase1.width = 1920;
                    canvase1.height = 1080;
                    // 추후 에펙 위치조정해야할듯함
                    canvase1.style.transform = 'translate3d(-50%, -50%, 0px) scale(.9)';

                    canvase2.width = 1920;
                    canvase2.height = 1080;
                    canvase2.style.transform = 'translate3d(-50%, -50%, 0px) scale(.9)';

      break;
      // 모바일 768
      case 3:
        // console.log('모바일이요')
              // 모바일일 때
              sceneInfo[0].objs.canvas.style.transform = 'translate3d(-50%, -50%, 0px) scale(1)';
              canvase1.width = 1080;
              canvase1.height = 1920;
              canvase1.style.transform = 'translate3d(-50%, -50%, 0px) scale(1)';
        
              canvase2.width = 1080;
              canvase2.height = 1920;
              canvase2.style.transform = 'translate3d(-50%, -50%, 0px) scale(1)';

              canvase3.width = 1080;
              canvase3.height = 1920;
              canvase3.style.transform = 'translate3d(-50%, -50%, 0px) scale(1)';

      break;
    }
      // console.log(checkPCMobile)
      // if (checkPCMobile === 3) {
      //   // 모바일일 때
      //   sceneInfo[0].objs.canvas.style.transform = 'translate3d(-50%, -50%, 0px) scale(0.65)';
      //   canvase1.width = 1080;
      //   canvase1.height = 1920;
      //   canvase1.style.transform = 'translate3d(-50%, -50%, 0px) scale(0.4)';

      //   canvase2.width = 1080;
      //   canvase2.height = 1920;
      //   canvase2.style.transform = 'translate3d(-50%, -50%, 0px) scale(0.4)';

      // } else {
      //   // PC일 때
      //   canvase1.width = 1920;
      //   canvase1.height = 1080;

      //   canvase2.width = 1920;
      //   canvase2.height = 1080;
      // }
    
  }
 


  // 각 스크롤 섹션의 높이 세팅
  function setLayout() {

    const sec4Title = document.querySelector('#scroll-section-4 .sticky-message');

    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].type === "sticky") {
        sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      } else if (sceneInfo[i].type === "normal") {
        // gsap사용으로 height값이 늘어나서 씬2가 1도중에 시작되는 부분이 있어서 기존수치 + 스크롤트리거 수치
        if(sceneInfo[i] === sceneInfo[1]){
          // 뒷 상수(1800)는 test.js의 #scroll-section-1 애니메이션 end값 수치부분을 가져온것
          sceneInfo[1].scrollHeight = sceneInfo[1].objs.container.offsetHeight + 1800;
        }
        else{
          sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
        }
        
      }

      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    document.body.setAttribute("id", `show-scene-${currentScene}`);
    // console.log(currentScene >> +'currentScene')

      const heightRatio = window.innerHeight / 1080; // window.innerHeight / 캔버스 원래 height 비율
      // 아래 위치값 css에서 처리했음 (캔버스) 
      sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(1)`;
      sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(1)`;
      // sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
      sceneInfo[3].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(1)`;   
      sceneInfo[5].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(1)`;   
  }
  setLayout();
  canvasSize();

  // 계산해주는 함수
  //currentYoffset : 현재 얼마나 스크롤 되었는지에 따라 values : opacity 조정
  function calcValues(values, currentYoffset) {
    let rv;

    const scrollHeight = sceneInfo[currentScene].scrollHeight; //현재 섹션의 scrollHeight
    // 현재스크롤에서 얼마나 스크롤 했는지 비율 구하기
    let scrollRatio = currentYoffset / sceneInfo[currentScene].scrollHeight;

    if (values.length === 3) {
      // start ~ end 사이에서 애니메이션 실행
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      // 범위안에 들어올때만 작동위해 if문 .. 안그러면 currentYoffset 음수값...
      if (currentYoffset >= partScrollStart && currentYoffset <= partScrollEnd) {
        // 현재씬에서 얼마나 스크롤 되었는지가 S와 E사이에 들어가야함 :: 비율 구하려면 S와 E사이에서만의 얼마나 스크롤 되었는지를 알아야 함
        rv =
          ((currentYoffset - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0];
      } else if (currentYoffset < partScrollStart) {
        rv = values[0];
      } else if (currentYoffset > partScrollStart) {
        rv = values[1];
      }
    } else {
      // return scrollRatio; -> console.log(calcValues(values, currentYoffset));
      rv = scrollRatio * (values[1] - values[0]) + values[0]; // [200, 900] opacity가 아니라 포지션이라면?을 생각해서 계산
    }

    return rv;
  }

  // 애니메이션에 대한 함수
  function playAnimation() {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYoffset = yOffset - prevScrollHeight;
    //yOffset - prevScrollHeight : 현재 스크롤된 양 - 이미 지나간 섹션들의 합 : 현재씬에서 얼마나 스크롤 했는지 나옴
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYoffset / scrollHeight; // 현재씬에서 얼마나 스크롤 했는지 비율 :: 얼마나스크롤 되었는지(현재스크롤 된거 - 이미 스크롤된 섹션들) / 현재섹션의 scrollHeight
    // 스크롤 비율에 따라 in을 적용할지 out을 적용할지 해줌 0.22 기준으로 작으면 in 크면 out

    // console.log(currentScene, currentYoffset);
    switch (currentScene) {
      case 0:
        // console.log("0 play");

        let sequence = Math.round(
          calcValues(values.imageSequence, currentYoffset)
        );
        // console.log(sequence);
          // 캔버스초기화,, 잔상효과 없애기 위함
        objs.context.clearRect(0, 0, objs.canvas.width, objs.canvas.height);
        objs.context.drawImage(objs.videoImages[sequence], 0, 0);

        if (scrollRatio <= 0.42) {
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_in,
            currentYoffset
          );
          objs.section0Bg.style.display = ''
          objs.messageA.style.transform = `translateY(${calcValues(
            values.messageA_translateY_in,
            currentYoffset
          )}%)`;
          
        
          // 벗어나면 다시 조정
        } else {
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_out,
            currentYoffset
          );
          objs.section0Bg.style.display = 'none'
          objs.messageA.style.transform = `translateY(${calcValues(
            values.messageA_translateY_out,
            currentYoffset
          )}%)`;
        }

        if (scrollRatio <= 0.72) {
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_in,
            currentYoffset
          );
          objs.messageB.style.transform = `translateY(${calcValues(
            values.messageB_translateY_in,
            currentYoffset
          )}%)`;
        } else {
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_out,
            currentYoffset
          );
          objs.messageB.style.transform = `translateY(${calcValues(
            values.messageB_translateY_out,
            currentYoffset
          )}%)`;
        }

        if (scrollRatio <= 0.72) {
          
          objs.logoPosContainer.style.opacity = calcValues(
            values.logoPosContainer_opacity_in,
            currentYoffset
            
          );

          objs.logoPosContainer.style.transform = `translateY(${calcValues(
            values.logoPosContainer_translateY_in,
            currentYoffset
          )}%)`;

        } else {
          objs.logoPosContainer.style.opacity = calcValues(
            values.logoPosContainer_opacity_out,
            currentYoffset
            
          );
          objs.logoPosContainer.style.transform = `translateY(${calcValues(
            values.logoPosContainer_translateY_out,
            currentYoffset
          )}%)`;


      }
      if (scrollRatio >= 0.6){
        // console.log('포인터')
        objs.logo1.style.cursor = ' pointer ';
        objs.logo2.style.cursor = ' pointer ';
        // objs.logo3.style.cursor = ' pointer ';
        objs.logo4.style.cursor = ' pointer ';
        objs.logo5.style.cursor = ' pointer ';
      }
      if(scrollRatio >= 0.9 || scrollRatio < 0.6){
        // console.log('오토')
        objs.logo1.style.cursor = ' auto ';
        objs.logo2.style.cursor = ' auto ';
        // objs.logo3.style.cursor = ' auto ';
        objs.logo4.style.cursor = ' auto ';
        objs.logo5.style.cursor = ' auto ';
      }
        break;
      case 1:
        // console.log("1 play");
        break;
      case 2:
        // console.log("2 play");
        let sequence2 = Math.round(
          calcValues(values.imageSequence, currentYoffset)
        );
        // console.log(sequence2 + ' 시원스2 ');
      
      //  console.log('sequence2 >>> '+sequence2);
      // 캔버스초기화,, 잔상효과 없애기 위함
      objs.context.clearRect(0, 0, objs.canvas.width, objs.canvas.height);
      //  objs.context.drawImage(objs.videoImages[sequence2], 0, 0);
      objs.context.drawImage(objs.videoImages[sequence2], 0, 0);

      // console.log(scrollRatio+' < < 씬2의 scrollRatio')
        if (scrollRatio <= 0.35) {
          
          // in
          objs.messageP1A.style.opacity = calcValues(
            values.messageP1A_opacity_in,
            currentYoffset
          );
          objs.messageP1A.style.transform = `translate3d(0, ${calcValues(
            values.messageP1A_translateY_in,
            currentYoffset
          )}%, 0)`;

          // in
          objs.messageP1B.style.opacity = calcValues(
            values.messageP1B_opacity_in,
            currentYoffset
          );
          objs.messageP1B.style.transform = `translate3d(0, ${calcValues(
            values.messageP1B_translateY_in,
            currentYoffset
          )}%, 0)`;


          // in
          objs.messageP1C.style.opacity = calcValues(
            values.messageP1C_opacity_in,
            currentYoffset
          );
          objs.messageP1C.style.transform = `translate3d(0, ${calcValues(
            values.messageP1C_translateY_in,
            currentYoffset
          )}%, 0)`;

        } else {
          // out
          objs.messageP1A.style.opacity = calcValues(
            values.messageP1A_opacity_out,
            currentYoffset
          );
          objs.messageP1A.style.transform = `translate3d(0, ${calcValues(
            values.messageP1A_translateY_out,
            currentYoffset
          )}%, 0)`;


          // out
          objs.messageP1B.style.opacity = calcValues(
            values.messageP1B_opacity_out,
            currentYoffset
          );
          objs.messageP1B.style.transform = `translate3d(0, ${calcValues(
            values.messageP1B_translateY_out,
            currentYoffset
          )}%, 0)`;

          // out
          objs.messageP1C.style.opacity = calcValues(
            values.messageP1C_opacity_out,
            currentYoffset
          );
          objs.messageP1C.style.transform = `translate3d(0, ${calcValues(
            values.messageP1C_translateY_out,
            currentYoffset
          )}%, 0)`;
        }



        if (scrollRatio <= 0.92) {
          // in
          objs.messageP2A.style.opacity = calcValues(
            values.messageP2A_opacity_in,
            currentYoffset
          );
          objs.messageP2A.style.transform = `translate3d(0, ${calcValues(
            values.messageP2A_translateY_in,
            currentYoffset
          )}%, 0)`;

          // in
          objs.messageP2B.style.opacity = calcValues(
            values.messageP2B_opacity_in,
            currentYoffset
          );
          objs.messageP2B.style.transform = `translate3d(0, ${calcValues(
            values.messageP2B_translateY_in,
            currentYoffset
          )}%, 0)`;

          // in
          objs.messageP2C.style.opacity = calcValues(
            values.messageP2C_opacity_in,
            currentYoffset
          );
          objs.messageP2C.style.transform = `translate3d(0, ${calcValues(
            values.messageP2C_translateY_in,
            currentYoffset
          )}%, 0)`;

          // in
          objs.messageP2D.style.opacity = calcValues(
            values.messageP2C_opacity_in,
            currentYoffset
          );
          objs.messageP2D.style.transform = `translate3d(0, ${calcValues(
            values.messageP2C_translateY_in,
            currentYoffset
          )}%, 0)`;


        } else {
          // out
          objs.messageP2A.style.opacity = calcValues(
            values.messageP2A_opacity_out,
            currentYoffset
          );
          objs.messageP2A.style.transform = `translate3d(0, ${calcValues(
            values.messageP2A_translateY_out,
            currentYoffset
          )}%, 0)`;


          // out
          objs.messageP2B.style.opacity = calcValues(
            values.messageP2B_opacity_out,
            currentYoffset
          );
          objs.messageP2B.style.transform = `translate3d(0, ${calcValues(
            values.messageP2B_translateY_out,
            currentYoffset
          )}%, 0)`;


          // out
          objs.messageP2C.style.opacity = calcValues(
            values.messageP2C_opacity_out,
            currentYoffset
          );
          objs.messageP2C.style.transform = `translate3d(0, ${calcValues(
            values.messageP2C_translateY_out,
            currentYoffset
          )}%, 0)`;


          // out
          objs.messageP2D.style.opacity = calcValues(
            values.messageP2C_opacity_out,
            currentYoffset
          );
          objs.messageP2D.style.transform = `translate3d(0, ${calcValues(
            values.messageP2C_translateY_out,
            currentYoffset
          )}%, 0)`;
        }

        if (scrollRatio <= 0.95) {
          // in
          objs.messageF.style.opacity = calcValues(
            values.messageF_opacity_in,
            currentYoffset
          );
          objs.messageF.style.transform = `translate3d(0, ${calcValues(
            values.messageF_translateY_in,
            currentYoffset
          )}%, 0)`;

          objs.messageG.style.opacity = calcValues(
            values.messageG_opacity_in,
            currentYoffset
          );
          objs.link.style.opacity = calcValues(
            values.link_opacity_in,
            currentYoffset
          );
        } else {
          // out
          objs.messageF.style.opacity = calcValues(
            values.messageF_opacity_out,
            currentYoffset
          );
          objs.messageF.style.transform = `translate3d(0, ${calcValues(
            values.messageF_translateY_out,
            currentYoffset
          )}%, 0)`;

          objs.messageG.style.opacity = calcValues(
            values.messageG_opacity_out,
            currentYoffset
          );
          objs.link.style.opacity = calcValues(
            values.link_opacity_out,
            currentYoffset
          );
        }

        break;
      case 3:
        console.log("3play");
        let sequence3 = Math.round(
          calcValues(values.imageSequence, currentYoffset)
        );
      
      console.log('sequence3 >>> '+sequence3);
      // 캔버스초기화,, 잔상효과 없애기 위함
      objs.context.clearRect(0, 0, objs.canvas.width, objs.canvas.height);
      //  objs.context.drawImage(objs.videoImages[sequence2], 0, 0);
      objs.context.drawImage(objs.videoImages[sequence3], 0, 0);

      // console.log(scrollRatio+' < < 씬2의 scrollRatio')
      if (scrollRatio <= 0.35) {
          
        // in
        objs.messageP1A.style.opacity = calcValues(
          values.messageP1A_opacity_in,
          currentYoffset
        );
        objs.messageP1A.style.transform = `translate3d(0, ${calcValues(
          values.messageP1A_translateY_in,
          currentYoffset
        )}%, 0)`;

        // in
        objs.messageP1B.style.opacity = calcValues(
          values.messageP1B_opacity_in,
          currentYoffset
          
        );
        objs.messageP1B.style.transform = `translate3d(0, ${calcValues(
          values.messageP1B_translateY_in,
          currentYoffset
        )}%, 0)`;

        // in
        objs.messageP1C.style.opacity = calcValues(
          values.messageP1C_opacity_in,
          currentYoffset
          
        );
        objs.messageP1C.style.transform = `translate3d(0, ${calcValues(
          values.messageP1C_translateY_in,
          currentYoffset
        )}%, 0)`;



      } else {
        // out
        objs.messageP1A.style.opacity = calcValues(
          values.messageP1A_opacity_out,
          currentYoffset
        );
        objs.messageP1A.style.transform = `translate3d(0, ${calcValues(
          values.messageP1A_translateY_out,
          currentYoffset
        )}%, 0)`;

        // out
        objs.messageP1B.style.opacity = calcValues(
          values.messageP1B_opacity_out,
          currentYoffset
        );
        objs.messageP1B.style.transform = `translate3d(0, ${calcValues(
          values.messageP1B_translateY_out,
          currentYoffset
        )}%, 0)`;

        // out
        objs.messageP1C.style.opacity = calcValues(
          values.messageP1C_opacity_out,
          currentYoffset
        );
        objs.messageP1C.style.transform = `translate3d(0, ${calcValues(
          values.messageP1C_translateY_out,
          currentYoffset
        )}%, 0)`;

      }

      if (scrollRatio <= 0.92) {
        // in
        objs.messageP2A.style.opacity = calcValues(
          values.messageP2A_opacity_in,
          currentYoffset
        );
        objs.messageP2A.style.transform = `translate3d(0, ${calcValues(
          values.messageP2A_translateY_in,
          currentYoffset
        )}%, 0)`;

        // in
        objs.messageP2B.style.opacity = calcValues(
          values.messageP2B_opacity_in,
          currentYoffset
        );
        objs.messageP2B.style.transform = `translate3d(0, ${calcValues(
          values.messageP2B_translateY_in,
          currentYoffset
        )}%, 0)`;

        // in
        objs.messageP2C.style.opacity = calcValues(
          values.messageP2C_opacity_in,
          currentYoffset
        );
        objs.messageP2C.style.transform = `translate3d(0, ${calcValues(
          values.messageP2C_translateY_in,
          currentYoffset
        )}%, 0)`;

        // in
        objs.messageP2D.style.opacity = calcValues(
          values.messageP2C_opacity_in,
          currentYoffset
        );
        objs.messageP2D.style.transform = `translate3d(0, ${calcValues(
          values.messageP2C_translateY_in,
          currentYoffset
        )}%, 0)`;






      } else {
        // out
        objs.messageP2A.style.opacity = calcValues(
          values.messageP2A_opacity_out,
          currentYoffset
        );
        objs.messageP2A.style.transform = `translate3d(0, ${calcValues(
          values.messageP2A_translateY_out,
          currentYoffset
        )}%, 0)`;

        // out
        objs.messageP2B.style.opacity = calcValues(
          values.messageP2B_opacity_out,
          currentYoffset
        );
        objs.messageP2B.style.transform = `translate3d(0, ${calcValues(
          values.messageP2B_translateY_out,
          currentYoffset
        )}%, 0)`;

        // out
        objs.messageP2C.style.opacity = calcValues(
          values.messageP2C_opacity_out,
          currentYoffset
        );
        objs.messageP2C.style.transform = `translate3d(0, ${calcValues(
          values.messageP2C_translateY_out,
          currentYoffset
        )}%, 0)`;

        // out
        objs.messageP2D.style.opacity = calcValues(
          values.messageP2C_opacity_out,
          currentYoffset
        );
        objs.messageP2D.style.transform = `translate3d(0, ${calcValues(
          values.messageP2C_translateY_out,
          currentYoffset
        )}%, 0)`;

      }

        if (scrollRatio <= 0.95) {
          // in
          objs.messageF.style.opacity = calcValues(
            values.messageF_opacity_in,
            currentYoffset
          );
          objs.messageF.style.transform = `translate3d(0, ${calcValues(
            values.messageF_translateY_in,
            currentYoffset
          )}%, 0)`;

          objs.messageG.style.opacity = calcValues(
            values.messageG_opacity_in,
            currentYoffset
          );
          objs.link.style.opacity = calcValues(
            values.link_opacity_in,
            currentYoffset
          );
        } else {
          // out
          objs.messageF.style.opacity = calcValues(
            values.messageF_opacity_out,
            currentYoffset
          );
          objs.messageF.style.transform = `translate3d(0, ${calcValues(
            values.messageF_translateY_out,
            currentYoffset
          )}%, 0)`;

          objs.messageG.style.opacity = calcValues(
            values.messageG_opacity_out,
            currentYoffset
          );
          objs.link.style.opacity = calcValues(
            values.link_opacity_out,
            currentYoffset
          );
        }
        
        break;
        case 4:

        console.log("4 play");
        
        break;
        case 5:
          console.log("5 play");
          let sequence4 = Math.round(
            calcValues(values.imageSequence, currentYoffset)
          );

          if (scrollRatio <= 0.3) {
          
            // in
            objs.canvas.style.opacity = calcValues(
              values.canvas_opacity_in,
              currentYoffset
            );
          }
          else {
            objs.canvas.style.opacity = calcValues(
              values.canvas_opacity_out,
              currentYoffset
            );
          }
        
        console.log('sequence4 >>> '+sequence4);
        // 캔버스초기화,, 잔상효과 없애기 위함
        objs.context.clearRect(0, 0, objs.canvas.width, objs.canvas.height);
        objs.context.drawImage(objs.videoImages[sequence4], 0, 0);

        break;
    }
  }

  // 스크롤 될 때 바뀌는 값에 대한 기능
  function scrollLoop() {
    enterNewscene = false;
    // console.log(window.scrollY);
    // console.log('스크롤 높이 >> ' + window.scrollY);
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
    }
    // console.log(prevScrollHeight);

    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      enterNewscene = true;
      currentScene++;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
    }
    if (yOffset < prevScrollHeight) {
      enterNewscene = true;
      if (currentScene === 0) return; // 예외처리 : -값으로 가는 브라우저가 있음(모바일)
      currentScene--;
      document.body.setAttribute("id", `show-scene-${currentScene}`);
    }
    // console.log(currentScene);

    if (enterNewscene) return; // 섹션이 바뀌는 순간은 playAnimation();이 동작 안함
    playAnimation();
  }
  // 로드 후 상시로 검사해서 이미지 로드하기 ,, 첫이미지 표시하기
  let checkInterval = setInterval(function() {
    // .loading-percent 요소의 텍스트 콘텐츠 가져오기
    let percentText = document.querySelector('.loading-percent').innerText;
  
    // 텍스트에서 '%' 기호 제거하고 숫자로 변환
    let percentLoaded = parseInt(percentText.replace('%', ''));
  
    // 실시간으로 로딩 퍼센트 출력
    console.log("현재 로딩 진행 상태: " + percentLoaded + "%");

    // 로딩 퍼센트가 100 이상이면 동작 실행
    if (percentLoaded >= 99) {
      console.log("이미지 로드 시작");
      // 로드때 첫 이미지 나오게
      sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);
      console.log("이미지 로드 완료");
      
      
      // 검사를 멈추기 위해 setInterval 클리어
      clearInterval(checkInterval);
    }
  }, 300); // 1초마다 반복

  setCanvasImages();

  window.addEventListener("scroll", () => {
    yOffset = window.scrollY; // 편의상 추후에 yOffset에 연산을 하기위해 변수로 만들어둠
    scrollLoop();
  });
  
  gsap.registerPlugin(ScrollTrigger, Flip);



  // 메인제목 HaeJun Portfolio
  gsap.to(".scroll-section-0-h1", {
    opacity: 0,
    y: "1430px", // y축으로 -45%로 이동
    ease: "linear",
    scrollTrigger: {
        trigger: ".container",
        start: "top top", // 시작 지점
        end: "+=1600", // 1500px 만큼 스크롤
        scrub: true, // 스크롤 양에 따라 애니메이션 조절
        // markers:true,
    }
  });
  // 뒷배경 빙산들
  gsap.to(".bg", {
    y: "-30%", // y축으로 -45%로 이동
    scrollTrigger: {
        trigger: ".container",
        start: "top top", // 시작 지점
        end: "+=4000", // 
        scrub: true, // 스크롤 양에 따라 애니메이션 조절
        // markers:true,
    }
  });

  // 빙하 점점 어두워지게 하는 dim처리
  gsap.to(".scolldimPc", {
    opacity:1,
    scrollTrigger: {
        trigger: ".container",
        start: "2050px top ", // 시작 지점
        end: "+=2000", 
        scrub: true, // 스크롤 양에 따라 애니메이션 조절
        // markers:true,
    }
  }); 

  gsap.to(".scolldimMobile", {
    opacity:1,
    scrollTrigger: {
        trigger: ".container",
        start: "1500px top ", // 시작 지점
        end: "+=2000", 
        scrub: true, // 스크롤 양에 따라 애니메이션 조절
        // markers:true,
    }
  }); 


  gsap.to(".section-2blackdim", {
    opacity:0,
    duration:0.5,
    scrollTrigger: {
        trigger: ".section-2blackdim",
        start: "top top ", // 시작 지점
        end: "+=1000", 
        scrub: true, // 스크롤 양에 따라 애니메이션 조절
        // markers:true,
    }
  }); 



  gsap.to(".quietplaceGsapContainer", {
    scrollTrigger: {
      trigger: ".quietplaceGsapContainer",
      start: "top top", // 시작 지점
      end: "bottom bottom", 
      scrub: true, // 스크롤 양에 따라 애니메이션 조절
      pin: true,
      // markers: true,
  
      onLeave: () => {
        console.log("END부분입니다!");
        gsap.to(".quietplaceGsapContainer", {
          opacity: 0,
          duration: 0.5 // 투명도 전환 애니메이션 지속 시간
        });
      },
      onEnterBack: () => {
        console.log("돌아왔습니다!");
        gsap.to(".quietplaceGsapContainer", {
          opacity: 1,
          duration: 0.5 // 투명도 전환 애니메이션 지속 시간
        });
      }
    }
  });
  
  

  gsap.to("#scroll-section-2 .languageContainer .leftBracket",{
    opacity: 1,
    left: 0,
    duration:0.5,
    scrollTrigger:{
      trigger: ".quietplaceGsapContainer",
      start: "top top ", // 시작 지점
      end: "+=500px", 
      scrub: true, // 스크롤 양에 따라 애니메이션 조절
      // pin:true,
      // markers:true,
      
    }
  })

  gsap.to("#scroll-section-2 .languageContainer .rightBracket",{
    opacity: 1,
    left: 0,
    duration:0.5,
    scrollTrigger:{
      trigger: ".quietplaceGsapContainer",
      start: "top top ", // 시작 지점
      end: "+=500px", 
      scrub: true, // 스크롤 양에 따라 애니메이션 조절
      // pin:true,
      // markers:true,
      
    }
  })

  gsap.to("#scroll-section-2 .quietplaceGsapContainer .languageContainer .languageIcon",{
    opacity: 1,
    scale: '1',
    duration:0.5,
    scrollTrigger:{
      trigger: ".languageContainer .languageIcon",
      start: "20vh top ", // 시작 지점
      end: "+=500px", 
      scrub: true, // 스크롤 양에 따라 애니메이션 조절
      // pin:true,
      // markers:true,
      
    }
  })
  
  gsap.to("#scroll-section-2 .quietplaceGsapContainer .languageContainer .languageIcon",{
    opacity: 1,
    scale: '1',
    duration:0.5,
    scrollTrigger:{
      trigger: ".languageContainer .languageIcon",
      start: "20vh top ", // 시작 지점
      end: "+=500px", 
      scrub: true, // 스크롤 양에 따라 애니메이션 조절
      // pin:true,
      // markers:true,
      
    }
  })

  gsap.to(".section-2lines", {
    scrollTrigger: {
      trigger: ".section-2lines",
      start: "top top", // 시작 지점
      end: "bottom bottom",
      pin: true,
      // markers: true,
      onEnter: () => gsap.to(".section-2lines", { opacity: 1, duration: 0.5 }),
      onLeave: () => gsap.to(".section-2lines", { opacity: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(".section-2lines", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".section-2lines", { opacity: 0, duration: 0.5 }),
    }
  });

  gsap.to(".section-3lines", {
    scrollTrigger: {
      trigger: ".section-3lines",
      start: "top top", // 시작 지점
      end: "bottom bottom",
      pin: true,
      // markers: true,
      onEnter: () => gsap.to(".section-3lines", { opacity: 1, duration: 0.5 }),
      onLeave: () => gsap.to(".section-3lines", { opacity: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(".section-3lines", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".section-3lines", { opacity: 0, duration: 0.5 }),
    }
  });


  // ********* 아래는 이케아 섹션
  gsap.to(".ikeaGsapContainer", {
    scrollTrigger: {
      trigger: ".ikeaGsapContainer",
      start: "top top", // 시작 지점
      end: "bottom bottom", 
      scrub: true, // 스크롤 양에 따라 애니메이션 조절
      pin: true,
      // markers: true,
  
      onLeave: () => {
        // console.log("END부분입니다!");
        gsap.to(".ikeaGsapContainer", {
          opacity: 0,
          duration: 0.5 // 투명도 전환 애니메이션 지속 시간
        });
      },
      onEnterBack: () => {
        // console.log("돌아왔습니다!");
        gsap.to(".ikeaGsapContainer", {
          opacity: 1,
          duration: 0.5 // 투명도 전환 애니메이션 지속 시간
        });
      }
    }
  });
  
  
  gsap.to("#scroll-section-3 .ikeaLanguageContainer .leftBracket",{
    opacity: 1,
    left: 0,
    duration:0.5,
    scrollTrigger:{
      trigger: ".ikeaGsapContainer",
      start: "top top ", // 시작 지점
      end: "+=500px", 
      scrub: true, // 스크롤 양에 따라 애니메이션 조절
      // pin:true,
      // markers:true,
      
    }
  })

  gsap.to("#scroll-section-3 .ikeaLanguageContainer .rightBracket",{
    opacity: 1,
    left: 0,
    duration:0.5,
    scrollTrigger:{
      trigger: ".ikeaGsapContainer",
      start: "top top ", // 시작 지점
      end: "+=500px", 
      scrub: true, // 스크롤 양에 따라 애니메이션 조절
      // pin:true,
      // markers:true,
      
    }
  })

  gsap.to("#scroll-section-3 .ikeaGsapContainer .ikeaLanguageContainer .languageIcon",{
    opacity: 1,
    scale: '1',
    duration:0.5,
    scrollTrigger:{
      trigger: ".ikeaLanguageContainer .languageIcon",
      start: "20vh top ", // 시작 지점
      end: "+=500px", 
      scrub: true, // 스크롤 양에 따라 애니메이션 조절
      // pin:true,
      // markers:true,
    }
  })

  gsap.to(".section-3blackdim", {
    opacity:1,
    duration:0.5,
    scrollTrigger: {
        trigger: ".section-3blackdim",
        start: "85% center ", // 시작 지점
        end: "bottom bottom", 
        scrub: true, // 스크롤 양에 따라 애니메이션 조절
        // markers:true,
    }
  }); 


  gsap.to(".section-5-dim", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".section-5-dim",
      start: "top top", // 시작 지점
      end: "+=500px", // 끝 지점
      scrub: true, // 스크롤 양에 따라 애니메이션 조절
      // markers: true,
    }
  });

  // gsap.to(".mouseCanvas", {
  //   opacity: 1,
  //   duration: 0.5,
  //   scrollTrigger: {
  //     trigger: ".container",
  //     start: "11% top", // 시작 지점
  //     // end: "+=800px", // 끝 지점
  //     // scrub: true, // 스크롤 양에 따라 애니메이션 조절
  //     // markers: true,
  //   }
  // });
  gsap.to(".mouseCanvas", {
    scrollTrigger: {
      trigger: ".container",
      start: "11% top", // 시작 지점

      // markers: true,
      onEnter: () => gsap.to(".mouseCanvas", { opacity: 1, duration: 0.5 }),
      onLeave: () => gsap.to(".mouseCanvas", { opacity: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(".mouseCanvas", { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(".mouseCanvas", { opacity: 0, duration: 0.5 }),
    }
  });


  const email01 = document.querySelector(".e-mail01");
  const email02 = document.querySelector(".e-mail02");
  const mousechk = document.querySelector(".mouseChk");
  const moreBtnChk = document.querySelector(".moreBtnarea");

  mousechk.addEventListener("mouseenter", function(){
    email01.style.display = 'none';
    email02.style.display = 'block';
    console.log('email01 호버')
  });
  
  mousechk.addEventListener("mouseleave", function(){
    email01.style.display = 'block';
    email02.style.display = 'none';
    console.log('email01 빠져나옴')
  });

  moreBtnChk.addEventListener("mouseenter", function(){

    console.log('링크 호버')
  });


  window.addEventListener("resize", setLayout);
  window.addEventListener('resize', checkWindowSize); 
}); // *****  document.addEventListener('DOMContentLoaded', function() {} 끝부분



























































































































