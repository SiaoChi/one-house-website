import Button from '@/components/button';
import Column from '@/components/column';
import { MENU_ITEMS } from '@/settings/config';
import { memo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { InformationData } from './config';
import './index.less';

const Information = memo(() => {
  const navigation = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const top = document.getElementById(hash.slice(1))?.offsetTop;
      if (top) window.scrollTo({ top: top - 100, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className='Information'>
      <Column>
        <div className='head'>
          <div>
            <div>1.</div>
            <div>INFORMATION</div>
          </div>
        </div>
        <div className='body'>
          <div id='about' className='cht'>
            {InformationData.cht.map((txt, index) => (
              <span key={txt + index}>{txt}</span>
            ))}
          </div>
          <div className='eng'>
            {InformationData.eng.map((txt, index) => (
              <span key={txt + index}>{txt}</span>
            ))}
          </div>
          <div id='contact' className='contact'>
            {InformationData.contact.map((txt, index) => (
              <span key={JSON.stringify(txt) + index}>{txt}</span>
            ))}
          </div>
          <div id='services' className='services'>
            <div>Services</div>
            {MENU_ITEMS[1].list.map((item) => (
              <div key={item.name}>
                <Button
                  className='hover:text-hover'
                  onClick={() => navigation(`/${MENU_ITEMS[1].name}${item.url}`)}
                >
                  {item.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Column>
    </div>
  );
});
export default Information;
