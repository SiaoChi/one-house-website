import useMedia, { MediaType } from '@/hooks/useMedia';
import { MENU_ITEMS } from '@/settings/config';
import { memo, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../button';

const Item = memo(({ item, index }: { item: (typeof MENU_ITEMS)[number]; index: number }) => {
  const classes = [
    'w-full lg:w-44 pl-[45%] lg:pl-0',
    'pl-[45%] lg:pl-0 w-full lg:w-72 mb-10 lg:mb-0',
  ];
  return (
    <div className={twMerge('font-reddit', classes[index])} key={item.name}>
      <div className='flex h-12 items-center text-sm lg:h-20'>
        <Button className='uppercase'>{item.name}</Button>
      </div>
      <div className='flex w-full flex-col text-xs lg:text-sm'>
        {item.list.map((list, index) => (
          <Button className='py-1 text-left' key={index}>
            {list.name}
          </Button>
        ))}
      </div>
    </div>
  );
});

const Row = memo(() => {
  const [device] = useMedia();

  const items = useMemo(() => {
    if (device <= MediaType.SM) return [...MENU_ITEMS].reverse();
    return [...MENU_ITEMS];
  }, [device]);

  return (
    <div className='relative flex h-full w-full flex-col'>
      <div className='w-fulls min-h-20'>
        <div className='relative flex h-screen w-full flex-col-reverse pt-20 lg:h-auto lg:flex-row lg:pt-0'>
          <div className='flex-1'>
            <div className='flex h-full w-full flex-col justify-end space-y-10 pt-20 lg:justify-between lg:space-y-0'>
              <div className='flex w-full flex-col items-start justify-start space-y-2 text-lg lg:text-sm'>
                <Button>Instagram</Button>
                <Button>Youtube</Button>
              </div>
              <div className='w-full pb-5 font-reddit text-sm lg:pb-0'>
                Design & Built by ONE HOUSE
                <br />© 2023 ONE HOUSE All rights reserved
              </div>
            </div>
          </div>
          {items.map((item, index) => (
            <Item item={item} index={index} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
});
export default Row;
