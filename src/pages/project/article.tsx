import useData, { TResult } from '@/hooks/useData';
import { REST_PATH } from '@/settings/config';
import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Album from './album';
import Table from './table';

let active = true;

const Article = memo(() => {
  const { category, name } = useParams();
  const [page, setPage] = useState({ index: 1 });
  const [data, setData] = useState<TResult[]>([]);
  const [fetchData, fetch] = useData();
  const [categoryData, setCategoryData] = useState(category);

  useEffect(() => {
    if (fetchData && fetchData?.length > 0) {
      const combineData = [...data, ...fetchData];
      const main = combineData.filter((item) => item.project === name);
      const list = combineData.filter((item) => item.project !== name);
      const currentData = [...main, ...list];
      setData(currentData);

      if (fetchData.length === 10) active = true;
      else active = false;
    }
  }, [fetchData]);

  useEffect(() => {
    const main = data.filter((item) => item.project === name);
    const list = data.filter((item) => item.project !== name);
    const currentData = [...main, ...list];
    setData(currentData);
  }, [name]);

  useEffect(() => {
    console.log(category, page.index);

    if (!category) fetch(REST_PATH.all + `?page=${page.index}`);
    else fetch(REST_PATH.category + category + `&page=${page.index}`);
    setCategoryData(category ? category : 'all');
  }, [category, page.index]);

  useEffect(() => {
    setData([]);
    setPage({ index: 1 });
  }, [categoryData]);

  useEffect(() => {
    const onScroll = () => {
      if (!active) return;

      const footerHeight = 300;
      const containerHeight = Math.floor(document.querySelector('.App')?.scrollHeight || 0);
      const isReachBottom =
        Math.floor(window.scrollY + window.innerHeight) >= containerHeight - footerHeight;

      if (isReachBottom) {
        active = false;
        setPage((S) => ({ ...S, index: S.index + 1 }));
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className='w-full'>
      {data.length > 0 && (
        <>
          <Album data={data[0]} />
          <Table data={data.slice(1)} />
        </>
      )}
    </div>
  );
});
export default Article;
