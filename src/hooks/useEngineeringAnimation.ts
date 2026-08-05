"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  sectionRef: RefObject<HTMLElement | null>;
}

export default function useEngineeringAnimation({
  sectionRef,
}: Props) {
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        gsap.from(".engineering-header", {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });

        gsap.from(".engineering-machine", {
          y: 120,
          scale: 0.92,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });

        gsap.from(".engineering-bottom", {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    {
      scope: sectionRef,
    }
  );
}