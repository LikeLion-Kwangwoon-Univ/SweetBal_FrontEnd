import { useEffect, useRef } from "react";
import { BubbleType } from "../interface/BubbleInterface";

export const useScrollToBottom = (list: BubbleType[]) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (ref && ref.current) {
      ref.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [list]);

  return ref;
};
