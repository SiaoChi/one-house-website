import Column from '@/components/column';
import { memo } from 'react';
import './index.less';

const Recent = memo(() => (
  <Column>
    <div className='Recent'>
      <div className='cover'>
        <div className='img' />
      </div>
    </div>
  </Column>
));
export default Recent;
