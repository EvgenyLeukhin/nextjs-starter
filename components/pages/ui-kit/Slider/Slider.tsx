import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from '@/utils/hooks/useWindowResize';
import { DeviceList } from '@/types/common';
import { ButtonPrev, ButtonNext } from '@/components/buttons';
import { Container } from '@/components/layout';
import styles from './Slider.module.scss';

const Slider = () => {
  const screenType = useWindowSize();
  const isLaptop = screenType === DeviceList.LAPTOP;
  const isTablet = screenType === DeviceList.TABLET;
  const isMobile = screenType === DeviceList.MOBILE;

  const showSlidesCount = () => {
    if (isLaptop) return 2.5;
    if (isTablet) return 1.9;
    if (isMobile) return 1.01;
    else return 3;
  };

  return (
    <section className={styles.Slider}>
      <Container>
        <h2>Slider</h2>
        {/* custom navigation */}
        <div className={styles.Slider__options}>
          <ButtonPrev className='Slider__button-prev' />
          <ButtonNext className='Slider__button-next' />
        </div>

        <Swiper
          loop={false}
          modules={[Navigation]}
          style={{ overflow: 'visible' }}
          navigation={{
            nextEl: '.Slider__button-next',
            prevEl: '.Slider__button-prev',
          }}
          spaceBetween={isMobile ? 8 : 30}
          slidesPerView={showSlidesCount()}
          className={styles.Slider__slider}
        >
          {/* slide-1 */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map(slide => {
            return (
              <SwiperSlide key={slide} className={styles.Slider__slide}>
                <h3>{`Slide-${slide}`}</h3>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default Slider;
