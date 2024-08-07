import { TResult } from '@/hooks/useData';
import { TClientProps } from '@/settings/type';
import { memo, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../button';
import './index.less';
import useCategoryToName from '@/hooks/useCategoryToName';
import { useNavigate } from 'react-router-dom';

type TProps = {
  title: string;
  data: TClientProps | TResult[];
};

const Link = memo(({ data }: { data: TResult }) => {
  const navigate = useNavigate();

  const [name] = useCategoryToName(data.category);
  return (
    <Button
      className='text-left'
      onClick={() => {
        navigate(`/project/${data.category}/${encodeURI(data.project)}`);
      }}
    >
      <div className='underline'>{data.project}</div>
      <div className=''>{String(name)}</div>
    </Button>
  );
});

const Image = memo(({ data }: { data: TClientProps[number] }) => {
  return <div className='image' style={{ backgroundImage: `url(${data.image})` }} />;
});

const Item = memo(({ data }: { data: TClientProps[number] | TResult }) => {
  const isSelected = Object.prototype.hasOwnProperty.call(data, 'project');

  const className = useMemo(() => {
    const classes = [];
    if (isSelected) classes.push('pb-5 pr-5 w-full lg:w-1/3');
    else classes.push('lg:pb-5 lg:pr-5 pb-2 pr-2 w-1/5 lg:w-1/6');
    return classes.join(' ');
  }, [isSelected]);

  return (
    <div className={className}>
      {Object.prototype.hasOwnProperty.call(data, 'project') ? (
        <Link data={data as TResult} />
      ) : (
        <Image data={data as TClientProps[number]} />
      )}
    </div>
  );
});

const Grid = memo(({ title, data }: TProps) => (
  <div
    className={twMerge(
      'Grid',
      Object.prototype.hasOwnProperty.call(data[0], 'project')
        ? 'flex-row'
        : 'flex-col lg:flex-row',
    )}
  >
    <div>{title}</div>
    <div
      className={Object.prototype.hasOwnProperty.call(data[0], 'category') ? 'selected' : 'clients'}
    >
      {data.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  </div>
));
export default Grid;
