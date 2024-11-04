const FilmCountries = ({ film }) => {
  return film?.countries?.map((countrie, idx) => (
    <span key={idx}>{idx !== film.countries.length - 1 ? countrie.name + ',' : countrie.name}</span>
  ));
};

export default FilmCountries;
