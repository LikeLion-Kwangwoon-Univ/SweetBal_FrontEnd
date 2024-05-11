import { useRef } from "react";

export const useScrollToBottom = () => {
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

  return { ref, scrollToBottom };
};
