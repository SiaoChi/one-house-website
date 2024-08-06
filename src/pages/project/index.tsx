import Column from '@/components/column';
import { memo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Article from './article';
import Category from './category';
import Description from './description';
import './index.less';

const Project = memo(() => {
  return (
    <div className='Project'>
      <Column>
        <div className='flex w-full flex-col-reverse items-end lg:flex-row lg:space-x-10'>
          <Description />
          <Category />
        </div>
      </Column>
      <div className='mt-10 w-full p-2'>
        <Article />
      </div>
    </div>
  );
});
export default Project;
