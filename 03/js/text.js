// import { gsap } from "https://cdn.skypack.dev/gsap@3.11.4";
// import splitType from "https://cdn.skypack.dev/split-type@0.3.3";

// gsap.registerPlugin(ScrollTrigger);


import { gsap } from "https://cdn.skypack.dev/gsap@3.11.4";
import splitType from "https://cdn.skypack.dev/split-type@0.3.3";

gsap.registerPlugin(ScrollTrigger);
// <p><span class="en2">My Portfolio</span><br/>introduction</p> 부분 글자 하나씩 적용
const ourText = new splitType('.textBox p', { types: 'chars' });
const chars = ourText.chars;
gsap.fromTo(
    ".textBox",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#scroll-section-1",
        start: "top top",
        end: "+=1800px top",
        scrub: 1,
        // markers: true,
        pin:true,
        // pinSpacing: false,
        // toggleActions: "play none none none", // Uncomment this line to control end behavior
      },
    }
  );

  gsap.to(chars, {
    backgroundPositionX: "0%",
    color: "#fff", // Desired color
    stagger: 1, // Stagger animation delay
    duration: 2,
    scrollTrigger: {
      trigger: "#scroll-section-1",
      start: "top top",
      end: "+=1800px top",
      scrub: 1,
      pin:true,
      // markers: true,
      // pinSpacing: false,
      // toggleActions: "play none none none", // Uncomment this line to control end behavior
    },
  });


  // .contactTextBoxTop

  gsap.to(".contactTextBoxTop", {
    scrollTrigger: {
        trigger: ".contactTextBoxTop",
        start: "top 70% ", // 시작 지점
        // markers:true,
        onEnter: () => gsap.to(".contactTextBoxTop", { opacity: 1, duration: 0.5 }),
        onLeave: () => gsap.to(".contactTextBoxTop", { opacity: 0.3, duration: 0.5 }),
        onEnterBack: () => gsap.to(".contactTextBoxTop", { opacity: 1, duration: 0.5 }),
        onLeaveBack: () => gsap.to(".contactTextBoxTop", { opacity: 0.3, duration: 0.5 }),
    }
  }); 
  // .contactTextBoxMiddle

  gsap.to(".contactTextBoxMiddle", {
    scrollTrigger: {
        trigger: ".contactTextBoxMiddle",
        start: "top 70% ", // 시작 지점
        markers:true,
        onEnter: () => gsap.to(".contactTextBoxMiddle", { opacity: 1, duration: 0.5 }),
        onLeave: () => gsap.to(".contactTextBoxMiddle", { opacity: 0.3, duration: 0.5 }),
        onEnterBack: () => gsap.to(".contactTextBoxMiddle", { opacity: 1, duration: 0.5 }),
        onLeaveBack: () => gsap.to(".contactTextBoxMiddle", { opacity: 0.3, duration: 0.5 }),
    }
  }); 

  gsap.to(".heajunLogo", {
    scrollTrigger: {
        trigger: ".heajunLogo",
        start: "top 50% ", // 시작 지점
        // markers:true,
        onEnter: () => gsap.to(".heajunLogo", { opacity: 1, duration: 0.5 }),
        // onLeave: () => gsap.to(".contactTextBoxMiddleLogo", { opacity: 0.3, duration: 0.5 }),
        onEnterBack: () => gsap.to(".heajunLogo", { opacity: 1, duration: 0.5 }),
        // onLeaveBack: () => gsap.to(".contactTextBoxMiddleLogo", { opacity: 0.3, duration: 0.5 }),
    }
  }); 


