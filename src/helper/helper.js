import gsap from "gsap";

function handleGsap(trigger, target, y, delay) {
  gsap.to(target, {
    y: y,
    duration: 2,
    ease: "back.out(1)",
    delay: delay,
    scrollTrigger: {
      trigger: ".section1",
    },
  });
}

export const helper = {
  handleGsap,
};
