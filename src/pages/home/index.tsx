import FullPage from '@/components/fullPage';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext, useEffect, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import Description from './description';
import './index.less';
import Physics from './physics';
import Recent from './recent';
import Selected from './selected';
import Clients from './clients';

const Home = memo(() => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<THomeState>(HomeState);

  useEffect(() => {
    setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
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
          <Description />
        </FullPage>
        <Recent />
        <Selected />
        <Clients />
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
