import Button from '@/components/button';
import useCategoryToName from '@/hooks/useCategoryToName';
import { TResult } from '@/hooks/useData';
import { memo } from 'react';
import './index.less';
import { useNavigate } from 'react-router-dom';

const Row = memo(({ data }: { data: TResult }) => {
  const navitation = useNavigate();

  const [name] = useCategoryToName(data.category);

  return (
    <Button onClick={() => navitation(`/project/${data.category}/${encodeURI(data.project)}`)}>
      <div className='row'>
        <div></div>
        <div>{data.project}</div>
        <div>{name}</div>
        <div>{data.year}</div>
      </div>
    </Button>
  );
});

const Table = memo(({ data }: { data: TResult[] }) => (
  <div className='table'>
    <div className='row'>
      <div></div>
      <div>Project /</div>
      <div>Category /</div>
      <div>Year /</div>
    </div>
    {data.map((item, index) => (
      <Row data={item} key={JSON.stringify(item) + index} />
    ))}
  </div>
));
export default Table;
