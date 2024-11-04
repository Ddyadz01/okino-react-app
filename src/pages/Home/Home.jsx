import HomeHeader from '../../_components/HomeHeader/HomeHeader';
import Slider from '../../_components/Slider/Slider';
import ListFilms from '../../_components/ListFilms/ListFilms';

import styles from './home.module.scss';

import { ganres } from './data.json';

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeHeader ganres={ganres} styles={styles} />
      <Slider />
      <ListFilms />
    </div>
  );
};

export default Home;
