import { memo, useEffect, useRef } from 'react';
import MatterSVG from './matter';

const Physics = memo(({ onload }: { onload: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      new MatterSVG({ element: ref.current, onload });
    }
  }, []);
  return <div ref={ref} className='physics absolute left-0 top-0 h-full w-full' />;
});
export default Physics;
