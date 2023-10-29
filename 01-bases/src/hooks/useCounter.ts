import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

interface Props {
  initialValue: number;
  maxCount: number;
}

export const useCounter = ({ initialValue, maxCount = 10 }: Props) => {
  const [counter, setCounter] = useState(initialValue);
  const elementToAnimate = useRef<never>(null); // never o any

  const tl = useRef(gsap.timeline());

  /* Se recomienda el useLayoutEffect para trabajar con referencias HTML */
  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;
    /* Disparar la animación con timeline */
    tl.current
      .to(elementToAnimate.current, { y: -45, duration: 0.7, ease: 'ease.out' })
      .to(elementToAnimate.current, { y: 0, duration: 0.4, ease: 'bounce.out' })
      .pause();
  }, []);

  /* Usar useEffect para iniciar la animación */
  useEffect(() => {
    // if (counter < maxCount) return;
    tl.current.play(0);
  }, [counter]);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
