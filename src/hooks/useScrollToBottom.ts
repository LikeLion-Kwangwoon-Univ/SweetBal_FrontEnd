import { useEffect, useRef } from "react";
import { BubbleType } from "../interface/BubbleInterface";

export const useScrollToBottom = (list: BubbleType[]) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (ref && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [list]);

  return ref;
};
