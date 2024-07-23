import Column from '@/components/column';
import FullPage from '@/components/fullPage';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext, useEffect, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';
import Physics from './physics';
import ScrollDown from './scrollDown';

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
          <Column className='pointer-events-none relative h-full font-reddit text-xs lg:text-sm'>
            <div className='relative flex w-full flex-row justify-between pt-12'>
              <div className='w-1/2 text-pretty'>
                One House Originating from design and photography, we delve deep into integrating
                creative thinking with strategic analysis. Through visual communication, we aim to
                convey brand concepts, thus enhancing brand recognition and exposure. Furthermore,
                we offer extensive marketing services beyond this scope, including advertising,
                imagery, and social media management, catering to diverse client needs and crafting
                a more impactful brand image.
              </div>
              <div className='text-right'>
                No. 96, Ln. 74, Sec. 3,
                <br />
                Bade Rd.,Songshan Dist.,
                <br />
                Taipei City105044 , Taiwan
                <br />
              </div>
            </div>
            <ScrollDown />
          </Column>
        </FullPage>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
