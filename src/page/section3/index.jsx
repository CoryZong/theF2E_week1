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
        start: "top top",
        end: "+=1750",
        scrub: 1,
      },
    });
    tl.fromTo(".circle-green", { rotation: -120 }, { rotation: -70 })
      .to(".circle-green", { rotation: -30 })
      .to(".circle-green", { rotation: 0 });
  });
  return (
    <div ref={section3Ref} className="section3">
      <Background />
      <TextBox />
    </div>
  );
};
