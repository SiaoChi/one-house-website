import useMedia, { MediaType } from '@/hooks/useMedia';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Button from '../button';
import Column from '../column';
import Menu from '../menu';
import Row from '../row';
import './index.less';

const Navigation = memo(() => {
  const navigation = useNavigate();

  const [context, setContext] = useContext(Context);
  const state = context[ActionType.MenuDraw];
  const enabled = state?.enabled;

  const [device] = useMedia();

  const className = useMemo(() => {
    const classes = ['h-20 min-h-20 overflow-hidden duration-300 ease-in-out'];
    if (enabled) {
      classes.push('shadow-on');
      if (device > MediaType.SM) classes.push('h-72');
      else classes.push('h-screen');
    } else classes.push('shadow-off');
    return classes.join(' ');
  }, [device, enabled]);

  return (
    <div className='Navigation'>
      <Column className={className}>
        <Row />
      </Column>
      <Column className='pointer-events-none absolute top-0 flex h-20 items-center justify-between'>
        <Button
          className='pointer-events-auto'
          onClick={() => {
            navigation('/');
            setContext({ type: ActionType.MenuDraw, state: { enabled: false } });
          }}
        >
          <div className={twMerge('logo', state?.enabled ? 'opacity-30' : 'opacity-100')} />
        </Button>
        <Menu />
      </Column>
    </div>
  );
});
export default Navigation;
