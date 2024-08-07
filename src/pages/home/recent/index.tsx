import Column from '@/components/column';
import { TResult } from '@/hooks/useData';
import { memo, useContext, useMemo } from 'react';
import { HomeContext } from '../config';
import './index.less';

const Image = ({ data }: { data: TResult }) => (
  <div style={{ backgroundImage: `url(${encodeURI(data.hero_image || '')})` }} className='img' />
);

const Recent = memo(({ data }: { data: TResult[] }) => {
  const [context] = useContext(HomeContext);
  const { overIndex } = context;

  const currentData = useMemo(() => {
    return data[overIndex];
  }, [overIndex]);

  return (
    <Column>
      <div className='Recent'>
        <div className='cover'>
          <Image data={currentData} />
        </div>
      </div>
    </Column>
  );
});
export default Recent;
