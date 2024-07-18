import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useCallback, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../button';
import './index.less';

const Menu = memo(() => {
  const [context, setContext] = useContext(Context);
  const state = context[ActionType.MenuDraw];

  const onClick = useCallback(() => {
    setContext({ type: ActionType.MenuDraw, state: { enabled: !state?.enabled } });
  }, [state]);

  return (
    <div className='Menu'>
      <Button onClick={onClick}>
        <div className={twMerge('dot', state?.enabled ? 'on' : '')}>
          <div>
            <div />
            <div />
          </div>
        </div>
      </Button>
    </div>
  );
});
export default Menu;
