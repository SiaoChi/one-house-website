import Column from '@/components/column';
import Grid from '@/components/grid';
import { TResult } from '@/hooks/useData';
import { memo, useMemo } from 'react';
import './index.less';

const Selected = memo(({ data }: { data: TResult[] }) => {
  const currentData = useMemo(() => {
    return data.slice(0, 6);
  }, [data]);

  return (
    <div className='Select'>
      <Column className='relative'>
        <Grid title='SELECTED PROJECT' data={currentData} />
      </Column>
    </div>
  );
});
export default Selected;
