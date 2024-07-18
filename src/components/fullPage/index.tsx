import { IReactProps } from '@/settings/type';
import { memo, useEffect } from 'react';
import './index.less';

const FullPage = memo(({ children }: IReactProps) => {
  useEffect(() => {}, []);
  return <div className='FullPage'>{children}</div>;
});
export default FullPage;
