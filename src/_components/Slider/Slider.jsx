import { useSlider } from '../../hooks/useSlider';

import SliderContent from './SliderContent';
import SliderCount from './SliderCount';
import SliderInformation from './SliderInformation';
import SliderNav from './SliderNav';
import SliderTimer from './SliderTimer';

import { slides } from './data.json';

import styles from './slider.module.scss';

const Slider = () => {
  const { currentSlide, setCurrentSlide, timer } = useSlider(slides);

  return (
    <div className={styles.slider}>
      <SliderContent slides={slides} styles={styles} currentSlide={currentSlide} />
      <SliderInformation slides={slides} currentSlide={currentSlide} styles={styles} />
      <SliderNav
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        styles={styles}
      />
      <SliderTimer styles={styles} timer={timer} />
      <SliderCount styles={styles} slides={slides} currentSlide={currentSlide} />
    </div>
  );
};

export default Slider;
