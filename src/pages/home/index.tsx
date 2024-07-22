import { memo, useContext, useEffect, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';
import FullPage from '@/components/fullPage';
import Column from '@/components/column';
import Physics from './physics';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';

const Home = memo(() => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<THomeState>(HomeState);

  useEffect(() => {
    setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
  }, []);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <FullPage>
          <Physics
            onload={() => {
              setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
            }}
          />
          <Column></Column>
        </FullPage>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
