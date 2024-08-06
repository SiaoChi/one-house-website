import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import Fetcher from 'lesca-fetcher';
import { useContext, useEffect, useState } from 'react';

type TResponse = {
  body: string;
};

export type TResult = {
  category: string;
  contents: { type: string; url: string }[];
  created_at: string;
  hero_image: string;
  project: string;
  timestamp: number;
  year: string;
};

const useData = (mountedURL?: string) => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<TResult[]>();

  const fetch = async (url: string) => {
    setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
    const { body } = (await Fetcher.get(url)) as TResponse;
    const data = JSON.parse(body) as TResult[];
    setState(data);
    setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
  };

  useEffect(() => {
    if (mountedURL) {
      fetch(mountedURL);
    }
  }, [mountedURL]);

  return [state, fetch] as const;
};
export default useData;
