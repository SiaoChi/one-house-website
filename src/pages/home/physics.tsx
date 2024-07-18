import { memo, useEffect, useRef } from 'react';
import Matter from 'matter-js';

const Physics = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
    }
  }, []);
  return <div ref={ref} className='absolute left-0 top-0 h-full w-full bg-blue-500'></div>;
});
export default Physics;
