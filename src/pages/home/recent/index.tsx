import Column from '@/components/column';
import { TResult } from '@/hooks/useData';
import { memo } from 'react';
import './index.less';

const Recent = memo(({ data }: { data: TResult }) => (
  <Column>
    <div className='Recent'>
      <div className='cover'>
        <div
          className='img'
          style={{ backgroundImage: `url(${encodeURI(data.hero_image || '')})` }}
        />
      </div>
    </div>
  </Column>
));
export default Recent;
