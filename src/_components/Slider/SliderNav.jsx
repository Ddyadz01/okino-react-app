const SliderNav = ({ slides, currentSlide, setCurrentSlide, styles }) => {
  return (
    <div className={styles.slider__nav}>
      {slides.map((_, idx) => (
        <span
          style={
            currentSlide === idx
              ? {
                  backgroundColor: '#fff ',
                  border: ' 3px solid  var(--color-primary)',
                  boxShadow: '0px 0px 5px var(--color-primary)',
                }
              : {}
          }
          key={idx}
          onClick={() => setCurrentSlide(idx)}
        ></span>
      ))}
    </div>
  );
};

export default SliderNav;
