import { Context } from '@/settings/constant';
import { memo, useContext } from 'react';
import Button from '../button';
import Column from '../column';
import Menu from '../menu';
import './index.less';
import { ActionType } from '@/settings/type';
import { twMerge } from 'tailwind-merge';
import Row from '../row';

const Navigation = memo(() => {
  const [context] = useContext(Context);
  const state = context[ActionType.MenuDraw];

  return (
    <div className='Navigation'>
      <Column
        className={twMerge(
          'h-20 min-h-20 overflow-hidden duration-300 ease-in-out',
          state?.enabled ? 'shadow-on h-72' : 'shadow-off',
        )}
      >
        <Row
          information={['About', 'Contact', 'Services']}
          project={[
            'Branding & Identity',
            'Graphic Design',
            '3D Visualization & Animation',
            'Photography & Documentary',
            'Video Production',
            'Curate Exhibition',
          ]}
        />
      </Column>
      <Column className='pointer-events-none absolute top-0 flex h-20 items-center justify-between'>
        <Button className='pointer-events-auto'>
          <div className={twMerge('logo', state?.enabled ? 'opacity-30' : 'opacity-100')} />
        </Button>
        <Menu />
      </Column>
    </div>
  );
});
export default Navigation;
