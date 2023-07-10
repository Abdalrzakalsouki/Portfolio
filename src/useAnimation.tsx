import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useAnimation = (rootRef: React.RefObject<HTMLDivElement>) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const element = rootRef.current;
      if (element)
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 0,
          },
          {
            opacity: 1,
            y: -60,
            duration: 3,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              once: true,
            },
          }
        );
    }, rootRef);
    return () => {
      ctx.revert();
    };
  }, []);
};

export default useAnimation;
