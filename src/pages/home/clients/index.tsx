import Column from '@/components/column';
import Grid from '@/components/grid';
import { memo, useEffect } from 'react';
import { ClientsData } from '../config';
import './index.less';

const Clients = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Clients'>
      <Column>
        <Grid title='clients' data={ClientsData} />
      </Column>
    </div>
  );
});
export default Clients;
