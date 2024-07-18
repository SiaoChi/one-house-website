import { memo, useEffect } from 'react';
import Button from '../button';

type IRowProps = {
  information: string[];
  project: string[];
};

const Drawer = memo(({ information, project }: IRowProps) => {
  return (
    <div className='font-reddit flex h-full w-full flex-row'>
      <div className='flex h-full flex-1 flex-col justify-between py-5'>
        <div className='flex w-full flex-col justify-start text-sm'>
          <a className='py-1' href='#'>
            Instagram
          </a>
          <a className='py-1' href='#'>
            Youtube
          </a>
        </div>
        <div className='font-reddit w-full text-sm'>
          Design & Built by ONE HOUSE
          <br />© 2023 ONE HOUSE All rights reserved
        </div>
      </div>
      <div className='font-reddit flex h-full w-44 flex-col items-start justify-start text-sm'>
        {information.map((item, index) => (
          <Button className='py-1 text-left' key={index}>
            {item}
          </Button>
        ))}
      </div>
      <div className='font-reddit flex h-full w-72 flex-col items-start justify-start text-sm'>
        {project.map((item, index) => (
          <Button className='py-1 text-left' key={index}>
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
});

const Row = memo(({ information, project }: IRowProps) => {
  useEffect(() => {}, []);
  return (
    <div className='relative flex h-full w-full flex-col'>
      <div className='h-20 w-full'>
        <div className='flex h-full w-full flex-row'>
          <div className='flex-1'></div>
          <div className='font-reddit flex h-full w-44 items-center text-sm'>
            <Button>INFORMATION</Button>
          </div>
          <div className='font-reddit mr-28 flex h-full w-44 items-center text-sm'>
            <Button>PROJECT</Button>
          </div>
        </div>
      </div>
      <div className='absolute top-20 h-[calc(100%-5rem)] w-full'>
        <Drawer information={information} project={project} />
      </div>
    </div>
  );
});
export default Row;
