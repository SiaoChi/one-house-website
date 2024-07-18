import { memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';
import FullPage from '@/components/fullPage';
import Column from '@/components/column';
import Physics from './physics';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <FullPage>
          <Physics />
          <Column></Column>
        </FullPage>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
