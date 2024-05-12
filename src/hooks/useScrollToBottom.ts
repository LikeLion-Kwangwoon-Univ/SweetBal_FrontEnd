import { useEffect, useRef } from "react";
import { BubbleType } from "../interface/CommentsInterface";

export const useScrollToBottom = (list: BubbleType[]) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (ref && ref.current) {
      const { scrollHeight, clientHeight } = ref.current;
      ref.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [list]);

  return ref;
};
