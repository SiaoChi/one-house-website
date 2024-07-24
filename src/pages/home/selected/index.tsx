import Column from '@/components/column';
import Grid from '@/components/grid';
import { memo } from 'react';
import './index.less';
import { SelectedProjectData } from '../config';

const Selected = memo(() => (
  <div className='Select'>
    <Column className='relative'>
      <Grid title='SELECTED PROJECT' data={SelectedProjectData} />
    </Column>
  </div>
));
export default Selected;
