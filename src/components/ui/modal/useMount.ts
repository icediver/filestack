import { useEffect, useRef, useState } from "react";
import { ANIMATION_TIME } from "./modal-layout/const";

interface IMount {
  isOpen: boolean;
}

export const useMount = ({ isOpen }: IMount) => {
  const [mounted, setMounted] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen && !mounted) {
      setMounted(true);
    } else if (!isOpen && mounted) {
      timer.current = setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
    return () => clearTimeout(timer.current as NodeJS.Timeout);
  }, [isOpen]);

  return {
    mounted,
  };
};
