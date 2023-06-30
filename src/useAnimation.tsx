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
          },
          {
            opacity: 1,
            duration: 3,
            scrollTrigger: {
              trigger: element,
              start: "top center",
              end: "bottom center",
              scrub: true,
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
