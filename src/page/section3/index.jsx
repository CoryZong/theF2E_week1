import "./index.scss";
import React, { useRef, useEffect } from "react";
import { TextBox } from "@/page/section3/conponent/TextBox";
import { Background } from "@/page/section3/conponent/Background";

export default () => {
  const section3Ref = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".circle-green",
        start: "top 40%",
        end: "+=1900",
        scrub: 1,
      },
    });
    tl.to(".text-box1", { opacity: 1 })
      .fromTo(".circle-green", { rotation: -120 }, { rotation: -70 })
      .to(".text-box2", { opacity: 1 })
      .to(".circle-green", { rotation: -30 })
      .to(".text-box3", { opacity: 1 })
      .to(".circle-green", { rotation: 0 })
      .to(".text-box4", { opacity: 1 });
  });
  return (
    <div ref={section3Ref} className="section3">
      <Background />
      <TextBox />
    </div>
  );
};
