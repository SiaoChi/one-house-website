import useMedia, { MediaType } from '@/hooks/useMedia';
import { LINKS, MENU_ITEMS } from '@/settings/config';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Button from '../button';

const Item = memo(({ item, index }: { item: (typeof MENU_ITEMS)[number]; index: number }) => {
  const [, setContext] = useContext(Context);
  const navigate = useNavigate();

  const classes = [
    'w-full lg:w-44 pl-[45%] lg:pl-0',
    'pl-[45%] lg:pl-0 w-full lg:w-72 mb-10 lg:mb-0',
  ];

  return (
    <div className={twMerge('font-reddit', classes[index])} key={item.name}>
      <div className='flex h-12 items-center text-sm lg:h-20'>
        <Button
          onClick={() => {
            navigate(`/${item.name}`);
            setContext({ type: ActionType.MenuDraw, state: { enabled: false } });
          }}
          className='uppercase'
        >
          {item.name}
        </Button>
      </div>
      <div className='flex w-full flex-col text-xs lg:text-sm'>
        {item.list.map((list, index) => (
          <Button
            className='py-1 text-left'
            key={index}
            onClick={() => {
              navigate(`${item.name}/${list.url.slice(0, 1) === '/' ? '' : '#'}${list.url}`);
              setContext({ type: ActionType.MenuDraw, state: { enabled: false } });
            }}
          >
            {list.name}
          </Button>
        ))}
      </div>
    </div>
  );
});

const Row = memo(() => {
  const [context] = useContext(Context);
  const enabled = context[ActionType.MenuDraw]?.enabled;

  const [device] = useMedia();
  const items = useMemo(() => {
    if (device <= MediaType.SM) return [...MENU_ITEMS].reverse();
    return [...MENU_ITEMS];
  }, [device]);

  return (
    <div className='relative flex h-full w-full flex-col'>
      <div className='w-fulls relative min-h-20'>
        <div className='relative flex h-screen w-full flex-col-reverse justify-start pt-20 lg:h-auto lg:flex-row lg:pt-0'>
          <div className='flex-1'>
            <div className='flex h-full w-full flex-col justify-end space-y-10 pt-20 lg:justify-between lg:space-y-0'>
              <div className='flex w-full flex-col items-start justify-start space-y-2 text-lg lg:text-sm'>
                <Button onClick={() => window.open(LINKS.ig)}>Instagram</Button>
                <Button onClick={() => window.open(LINKS.youtube)}>Youtube</Button>
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
        {!enabled && <div className='absolute top-0 h-20 w-full bg-white lg:hidden' />}
      </div>
    </div>
  );
});
export default Row;
