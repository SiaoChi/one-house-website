import Footer from '@/components/footer';
import LoadingProcess from '@/components/loadingProcess';
import Marquee from '@/components/marquee';
import Navigation from '@/components/navigation';
import { Context, InitialState, Reducer } from '@/settings/constant';
import '@/settings/global.less';
import { ActionType, TContext } from '@/settings/type';
import Fetcher, { contentType, formatType } from 'lesca-fetcher';
import { memo, useMemo, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Information from './information';
import Project from './project';

Fetcher.install({
  hostUrl: import.meta.env.VITE_API_PATH || './api',
  contentType: contentType.JSON,
  formatType: formatType.JSON,
});

if (import.meta.env.VITE_MOCKING === 'true') {
  import('@/mocks/browser').then((e) => {
    e.worker.start({ serviceWorker: { url: './mockServiceWorker.js' } });
  });
}

const RoutePages = memo(() => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/information' element={<Information />} />
    <Route path='/project' element={<Project />} />
    <Route path='/project/:category' element={<Project />} />
    <Route path='/project/:category/:name' element={<Project />} />
    <Route path='*' element={<Home />} />
  </Routes>
));

const App = () => {
  const [state, setState] = useReducer(Reducer, InitialState);
  const value: TContext = useMemo(() => [state, setState], [state]);

  return (
    <div className='App'>
      <Context.Provider {...{ value }}>
        <BrowserRouter
          basename={window.location.hostname.indexOf('github') > 0 ? 'one-house-website' : ''}
        >
          <RoutePages />
          <Footer />
          <Marquee />
          <Navigation />
        </BrowserRouter>
        {state[ActionType.LoadingProcess]?.enabled && <LoadingProcess />}
      </Context.Provider>
    </div>
  );
};

if (document.getElementById('app')?.children.length === 0) {
  ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
}
