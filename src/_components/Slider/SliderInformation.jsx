import { Play, Heart } from 'lucide-react';

import Button from '../Button/Button';

const SliderInformation = ({ slides, styles, currentSlide }) => {
  return (
    <div className={styles.slide__content}>
      <div className={styles.ganres}>
        {slides[currentSlide]?.ganres.map((ganre, idx) => (
          <div key={idx} className={styles.ganre}>
            {ganre}
          </div>
        ))}
      </div>
      <div className={styles.slide__description}>
        <h3>{slides[currentSlide]?.title}</h3>
        <p>{slides[currentSlide]?.description}</p>
      </div>
      <div className={styles.slider__buttons}>
        <Button type={'default'}>
          <Play color="#000" /> Watch Now
        </Button>
        <Button type={'primary'}>
          <Heart /> Favorite
        </Button>
      </div>
    </div>
  );
};

export default SliderInformation;
