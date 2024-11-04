const SliderContent = ({ slides, styles, currentSlide }) => {
  return (
    <div className={styles.slider__content}>
      <div
        className={styles.slides}
        style={{ transform: `translateY(${-400 * currentSlide + 'px'})` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <img src={slide.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderContent;
