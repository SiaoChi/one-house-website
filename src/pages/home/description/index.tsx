import Column from '@/components/column';
import { memo } from 'react';
import './index.less';
import ScrollDown from './scrollDown';

const Description = memo(() => (
  <Column className='pointer-events-none relative h-full font-reddit text-sm lg:text-base'>
    <div className='relative flex w-full flex-col justify-between space-y-12 pt-12 lg:flex-row lg:space-y-0'>
      <div className='w-10/12 text-pretty lg:w-1/2'>
        One House Originating from design and photography, we delve deep into integrating creative
        thinking with strategic analysis. Through visual communication, we aim to convey brand
        concepts, thus enhancing brand recognition and exposure. Furthermore, we offer extensive
        marketing services beyond this scope, including advertising, imagery, and social media
        management, catering to diverse client needs and crafting a more impactful brand image.
      </div>
      <div className='text-right'>
        No. 96, Ln. 74, Sec. 3,
        <br />
        Bade Rd.,
        <br />
        Songshan Dist.,
        <br />
        Taipei City 105044, Taiwan
        <br />
      </div>
    </div>
    <ScrollDown />
  </Column>
));
export default Description;
