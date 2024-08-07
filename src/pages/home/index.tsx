import FullPage from '@/components/fullPage';
import useData from '@/hooks/useData';
import { REST_PATH } from '@/settings/config';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext, useEffect, useState } from 'react';
import Clients from './clients';
import { HomeContext, HomeState, THomeState } from './config';
import Description from './description';
import './index.less';
import Physics from './physics';
import Recent from './recent';
import Selected from './selected';

const Home = memo(() => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<THomeState>(HomeState);
  const [data] = useData(REST_PATH.home);

  useEffect(() => {
    if (data) setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
  }, [data]);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <FullPage>
          {data && (
            <Physics
              onload={() => {
                setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
              }}
            />
          )}
          <Description />
        </FullPage>
        {data && <Recent data={data[0]} />}
        {data && <Selected data={data} />}
        <Clients />
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
