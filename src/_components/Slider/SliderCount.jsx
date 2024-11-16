import React from 'react';

const SliderCount = ({ styles, slides, currentSlide }) => {
  return <div className={styles.slider__count}> {currentSlide + 1 + '/' + slides.length}</div>;
};

export default SliderCount;
