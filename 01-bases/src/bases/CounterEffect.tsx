import { useLayoutEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface Props {
  initialValue?: number;
  title: string;
}

const MAXIMUN_COUNT = 10;

export const CounterEffect: React.FC<Props> = ({ initialValue = 5, title }) => {
  const [counter, setCounter] = useState(initialValue);
  const counterElement = useRef<HTMLHeadingElement>(null);

  /* Se recomienda el useLayoutEffect para trabajar con referencias HTML */
  useLayoutEffect(() => {
    if (counter < MAXIMUN_COUNT) return;
    console.log('Se llego al valor máximo');

    /* Disparar la animación con timeline */
    const tl = gsap.timeline();

    tl.to(counterElement.current, { y: -45, duration: 0.7, ease: 'ease.out' });
    tl.to(counterElement.current, { y: 0, duration: 0.4, ease: 'bounce.out' });

    /* Disparar la animación  */
    // gsap
    //   .to(counterElement.current, { y: -45, duration: 0.7, ease: 'ease.out' })
    //   .then(() => {
    //     gsap.to(counterElement.current, {
    //       y: 0,
    //       duration: 0.4,
    //       ease: 'bounce.out',
    //     });
    //   });
  }, [counter]);

  const handleClick = () => {
    // if (counter >= MAXIMUN_COUNT) return;
    // setCounter(counter + 1);

    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  return (
    <>
      <h2>{title}:</h2>
      <h3 ref={counterElement}>{counter}</h3>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
