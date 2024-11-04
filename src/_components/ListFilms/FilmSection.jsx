import FilmCountries from './FilmCountries';

const FilmSection = ({ styles, films }) => {
  return (
    <div className={styles.list__films__section}>
      {films?.map((film) => (
        <div key={film.id} className={styles.card__film}>
          <div className={styles.card__film_img}>
            <img src={film.poster?.url} alt="" />
          </div>
          <div className={styles.card__film_info}>
            <h1>{film.name}</h1>
            <p>{film.year}</p>
            <div className={styles.card__film_info__countries}>
              <FilmCountries film={film} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmSection;
