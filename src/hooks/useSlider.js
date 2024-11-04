'use client';

import { useEffect, useState } from 'react';

export const useSlider = (slides) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [durationSlide] = useState(5);
  const [timer, setTimer] = useState(durationSlide);

  const [param, setParam] = useState('next');

  const nextSlide = () => {
    if (currentSlide >= slides.length - 1) {
      return setParam('prev'), prevSlide();
    }
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
      setTimer(durationSlide);
    }, durationSlide * 1000);
    return () => clearInterval(interval);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      return setParam('next'), nextSlide();
    }
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev - 1);
      setTimer(durationSlide);
    }, durationSlide * 1000);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer !== 0) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [prevSlide, nextSlide]);

  useEffect(() => {
    if (param === 'next') {
      return nextSlide();
    }
    return prevSlide();
  }, [currentSlide]);

  useEffect(() => {
    setTimer(durationSlide);
  }, [currentSlide]);

  return {
    currentSlide,
    setCurrentSlide,
    timer,
  };
};
