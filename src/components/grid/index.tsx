import { memo, useEffect, useMemo } from 'react';
import './index.less';
import Button from '../button';
import { TClientProps, TSelectedProjectProps } from '@/settings/type';
import { twMerge } from 'tailwind-merge';

type TProps = {
  title: string;
  data: TClientProps | TSelectedProjectProps;
};

const Link = memo(({ data }: { data: TSelectedProjectProps[number] }) => {
  return (
    <Button className='text-left'>
      <div className='underline'>{data.title}</div>
      <div className=''>{data.body}</div>
    </Button>
  );
});

const Image = memo(({ data }: { data: TClientProps[number] }) => {
  return <div className='image' style={{ backgroundImage: `url(${data.image})` }} />;
});

const Item = memo(({ data }: { data: TClientProps[number] | TSelectedProjectProps[number] }) => {
  const isSelected = Object.prototype.hasOwnProperty.call(data, 'title');

  const className = useMemo(() => {
    const classes = [];
    if (isSelected) classes.push('pb-5 pr-5 w-full lg:w-1/3');
    else classes.push('lg:pb-10 lg:pr-10 pb-5 pr-5 w-1/5 lg:w-1/6');
    return classes.join(' ');
  }, [isSelected]);

  return (
    <div className={className}>
      {Object.prototype.hasOwnProperty.call(data, 'title') ? (
        <Link data={data as TSelectedProjectProps[number]} />
      ) : (
        <Image data={data as TClientProps[number]} />
      )}
    </div>
  );
});

const Grid = memo(({ title, data }: TProps) => {
  useEffect(() => {}, []);
  return (
    <div
      className={twMerge(
        'Grid',
        Object.prototype.hasOwnProperty.call(data[0], 'title')
          ? 'flex-row'
          : 'flex-col lg:flex-row',
      )}
    >
      <div>{title}</div>
      <div
        className={Object.prototype.hasOwnProperty.call(data[0], 'title') ? 'selected' : 'clients'}
      >
        {data.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>
    </div>
  );
});
export default Grid;