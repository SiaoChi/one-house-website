import { CATEGORY_DESCRIPTION } from '@/settings/config';
import { memo, useMemo } from 'react';
import { useParams } from 'react-router-dom';

const Description = memo(() => {
  const { category } = useParams();

  const { description, list } = useMemo(() => {
    if (category) {
      const keyName = category as keyof typeof CATEGORY_DESCRIPTION;
      return CATEGORY_DESCRIPTION[keyName];
    }
    return { description: '', list: [] };
  }, [category]);

  return (
    <div className='description mt-20 flex w-full flex-1 flex-col items-start justify-end space-y-10 lg:mt-0'>
      {category && (
        <>
          <div className='list'>
            {list.map((txt) => {
              return <span key={txt}>{txt}</span>;
            })}
          </div>
          <div className='hidden w-full max-w-none lg:block lg:max-w-[500px]'>{description}</div>
        </>
      )}
    </div>
  );
});
export default Description;
