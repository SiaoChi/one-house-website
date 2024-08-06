import { useEffect, useState } from 'react';

const useDevice = () => {
  const [state, setState] = useState<'unset' | 'mouse' | 'touch'>('unset');
  const isTouchDevice = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    const resize = () => setState(isTouchDevice() ? 'touch' : 'mouse');
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return [state, fetch];
};
export default useDevice;
