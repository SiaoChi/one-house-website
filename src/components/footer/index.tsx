import useMedia, { MediaType } from '@/hooks/useMedia';
import { memo, useMemo } from 'react';
import { IoArrowBackOutline, IoArrowUpOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Button from '../button';
import Column from '../column';
import './index.less';
import { LINKS } from '@/settings/config';

const PageTop = () => {
  return (
    <Button
      className='flex flex-row items-center uppercase'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Page top
      <IoArrowUpOutline className='ml-1' />
    </Button>
  );
};

const PageBack = () => {
  const location = useLocation();

  const hasHistory = useMemo(() => {
    const { state, length } = history;
    if (state && state.idx > 0 && length > 1) return true;
    return false;
  }, [location]);

  return (
    <Button
      className={twMerge('flex flex-row items-center uppercase', hasHistory ? '' : 'hidden')}
      onClick={() => history.back()}
    >
      <IoArrowBackOutline className='mr-1' />
      back
    </Button>
  );
};

const Footer = memo(() => {
  const [device] = useMedia();

  return (
    <footer className='Footer'>
      <Column className='flex flex-row items-end justify-between'>
        <div className='flex flex-col items-start space-x-0 space-y-5 lg:flex-row lg:items-end lg:space-x-5 lg:space-y-0'>
          <div className='logo' />
          <div className='font-reddit text-xs lg:text-sm'>
            Design & Built by ONE HOUSE
            <br />© 2024 ONE HOUSE All rights reserved
          </div>
        </div>
        <div className='font-lg flex select-none flex-col items-end space-x-0 font-reddit text-sm lg:flex-row lg:space-x-5 lg:pr-20'>
          <Button className='uppercase' onClick={() => window.open(LINKS.ig)}>
            Instagram
          </Button>
          <Button className='uppercase' onClick={() => window.open(LINKS.youtube)}>
            Youtube
          </Button>
        </div>
        <div className='hidden select-none flex-row space-x-10 lg:flex'>
          <PageBack />
          <PageTop />
        </div>
      </Column>
      {device < MediaType.MD && (
        <div className='absolute right-0 top-0 flex flex-row space-x-5 px-5 py-8 text-sm'>
          <PageBack />
          <PageTop />
        </div>
      )}
    </footer>
  );
});
export default Footer;
