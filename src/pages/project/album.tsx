import { TResult } from '@/hooks/useData';
import { memo, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProjectContext } from './config';
import { ValidateYoutubeURL } from 'lesca-validate';
import { twMerge } from 'tailwind-merge';

const Media = memo(({ type, url, index }: { type: string; url: string; index: number }) => {
  const [context] = useContext(ProjectContext);

  if (type === 'png' || type === 'jpeg') {
    return <div className='image' style={{ backgroundImage: `url(${encodeURI(url)})` }} />;
  }

  const { active, swiperIndex } = context;
  const isShorts = url.includes('shorts');
  const id = ValidateYoutubeURL(url);
  const thumbnail = `https://img.youtube.com/vi/${id}/0.jpg`;

  return (
    <div className='iframe'>
      <div className={twMerge(isShorts ? 'shorts' : 'youtube')}>
        <div>
          <div style={{ backgroundImage: `url(${thumbnail})` }}>
            {active && swiperIndex === index && (
              <iframe
                key={`youtube-${id}`}
                title='ytplayer'
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const Album = memo(({ data }: { data: TResult }) => {
  const [, setState] = useContext(ProjectContext);
  return (
    <div className='Album'>
      <Swiper
        navigation={{ enabled: true }}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        modules={[Navigation]}
        onSlideChange={(e) => {
          setState((S) => ({ ...S, swiperIndex: e.realIndex, active: true }));
        }}
        onSliderFirstMove={() => {
          setState((S) => ({ ...S, active: false }));
        }}
      >
        {data.contents.map((item, index) => {
          return (
            <SwiperSlide key={JSON.stringify(item) + index}>
              <Media type={item.type} url={item.url} index={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
});
export default Album;
