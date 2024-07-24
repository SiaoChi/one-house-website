import { memo, useEffect } from 'react';
import './index.less';
import Marquee from 'react-fast-marquee';

const TextMarquee = memo(() => {
  useEffect(() => {}, []);
  return (
    <Marquee className='Marquee'>
      <div>info@one-house.com</div>
      <div>@ONEHOUSE</div>
      <div>onehouse © 2024, ALL RIGHT RESERVED.</div>
      <div>info@one-house.com</div>
      <div>@ONEHOUSE</div>
      <div>onehouse © 2024, ALL RIGHT RESERVED.</div>
    </Marquee>
  );
});
export default TextMarquee;
