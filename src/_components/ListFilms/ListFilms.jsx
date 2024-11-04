import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { useFilms } from '../../hooks/useFilms';

import FilmSection from './FilmSection';
import FilmSkeleton from '../Skeletons/FilmSkeleton';
import TitleSkeleton from '../Skeletons/TitleSkeleton';

import { useFilter } from '../../hooks/useFilter';

import styles from './listfilm.module.scss';

const ListFilms = () => {
  const { ganre } = useSelector((state) => state.filter);

  const { data, isPending, isError } = useFilms();

  const films = useFilter(data, ganre);

  useEffect(() => {
    toast(`Выбран жанр: ${ganre}`);
    console.log('2');
  }, [ganre]);

  if (isError) return 'Ошибка при загрузке фильмов. Повторите попытку.';

  return (
    <div className={styles.list__films}>
      {isPending ? (
        <>
          <TitleSkeleton />
          <div
            className="skeleton-films"
            style={{
              marginTop: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {[...new Array(12)].map((__, idx) => (
              <FilmSkeleton key={idx} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1>{ganre + ` (${films.length})`}</h1>
          <FilmSection films={films} styles={styles} ganre={ganre} />
        </>
      )}
    </div>
  );
};

export default ListFilms;
