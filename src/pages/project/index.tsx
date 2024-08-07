import Column from '@/components/column';
import { memo, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Article from './article';
import Category from './category';
import Description from './description';
import './index.less';
import { ProjectContext, ProjectState } from './config';

const Project = memo(() => {
  const value = useState(ProjectState);

  return (
    <ProjectContext.Provider value={value}>
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
    </ProjectContext.Provider>
  );
});
export default Project;
