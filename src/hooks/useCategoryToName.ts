import { MENU_ITEMS } from '@/settings/config';
import { useEffect, useState } from 'react';

const useCategoryToName = (category?: string) => {
  const [state, setState] = useState<string>('');

  const fetch = (cate: string) => {
    const [name] = MENU_ITEMS[1].list
      .filter((item) => item.category === cate)
      .map((item) => item.name);
    setState(name);
    return name;
  };

  useEffect(() => {
    if (category) fetch(category);
  }, []);

  return [state, fetch] as const;
};
export default useCategoryToName;
