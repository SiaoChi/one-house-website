import { TResult } from '@/hooks/useData';
import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Media = memo(({ type, url }: { type: string; url: string }) => {
  if (type === 'png' || type === 'jpeg') {
    return <div className='image' style={{ backgroundImage: `url(${encodeURI(url)})` }} />;
  }

  console.log(type);

  return <div />;
});

const Album = memo(({ data }: { data: TResult }) => (
  <div className='Album'>
    <Swiper
      navigation={{ enabled: true }}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      modules={[Navigation]}
    >
      {data.contents.map((item, index) => {
        return (
          <SwiperSlide key={JSON.stringify(item) + index}>
            <Media type={item.type} url={item.url} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
));
export default Album;
