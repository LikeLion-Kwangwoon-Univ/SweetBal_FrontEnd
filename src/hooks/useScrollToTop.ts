import { useEffect, useRef } from "react";
import { BubbleType } from "@/interface/CommentsInterface";

export const useScrollToTop = (list: BubbleType[]) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    if (ref && ref.current) {
      ref.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [list]);

  return ref;
};
