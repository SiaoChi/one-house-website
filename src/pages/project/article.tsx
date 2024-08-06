import useData from '@/hooks/useData';
import { REST_PATH } from '@/settings/config';
import { memo, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Album from './album';

const Article = memo(() => {
  const { category, name } = useParams();

  const [data, fetch] = useData();

  const fetchArticle = useMemo(() => {
    if (!name) return data;
    return data?.filter((item) => item.project !== name);
  }, [data, name]);

  useEffect(() => {
    if (!name && !category) fetch(REST_PATH.all);
    else fetch(REST_PATH.category + category);
  }, [category, name]);

  return (
    <div className='w-full'>
      {fetchArticle && (
        <>
          <Album data={fetchArticle[0]} />
        </>
      )}
    </div>
  );
});
export default Article;
