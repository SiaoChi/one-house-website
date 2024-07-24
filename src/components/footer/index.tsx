import { memo, useEffect } from 'react';
import './index.less';
import Column from '../column';
import Button from '../button';
import { IoArrowUpOutline } from 'react-icons/io5';

const Footer = memo(() => {
  useEffect(() => {}, []);
  return (
    <footer className='Footer'>
      <Column className='flex flex-row items-end justify-between'>
        <div className='flex flex-col items-start space-x-0 space-y-5 lg:flex-row lg:items-end lg:space-x-5 lg:space-y-0'>
          <div className='logo' />
          <div className='font-reddit text-sm'>
            Design & Built by ONE HOUSE
            <br />© 2024 ONE HOUSE All rights reserved
          </div>
        </div>
        <div className='font-lg flex flex-col items-end space-x-0 font-reddit text-base lg:flex-row lg:space-x-5 lg:pr-20'>
          <Button className='uppercase'>INStagram</Button>
          <Button className='uppercase'>Facebook</Button>
        </div>
        <div className='hidden lg:block'>
          <Button className='flex flex-row items-center uppercase'>
            Page top
            <IoArrowUpOutline className='ml-2' />
          </Button>
        </div>
      </Column>
    </footer>
  );
});
export default Footer;
