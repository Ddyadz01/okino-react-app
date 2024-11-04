export const useFilter = (films, ganre) => {
  if (!films) return;
  if (ganre === 'Все' || null) return films;

  return films.filter((film) => film?.genres[0]?.name === ganre);
};
