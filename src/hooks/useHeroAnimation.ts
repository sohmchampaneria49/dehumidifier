"use client";

import { RefObject, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 300;

interface HeroAnimationProps {
  heroRef: RefObject<HTMLElement | null>;
}

export default function useHeroAnimation({
  heroRef,
}: HeroAnimationProps) {
  const [frame, setFrame] = useState(0);

  useGSAP(
    () => {
      if (!heroRef.current) return;

      const playhead = { frame: 0 };

      const animation = gsap.to(playhead, {
        frame: TOTAL_FRAMES - 1,
        ease: "none",

        onUpdate: () => {
          setFrame(Math.round(playhead.frame));
        },

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=4000",

          scrub: 1,

          pin: true,

          pinSpacing: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    },
    {
      scope: heroRef,
      dependencies: [],
      revertOnUpdate: true,
    }
  );

  return frame;
}