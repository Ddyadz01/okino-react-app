import Ganres from '../Ganres/Ganres';
import Notification from '../Notification/Notification';
import Search from '../Search/Search';
import UserModal from '../UserModal/UserModal';

const HomeHeader = ({ styles, ganres }) => {
  return (
    <div className={styles.home__top}>
      <div className={styles.home__top_left}>
        <Ganres ganres={ganres} />
        <Search />
        <Notification />
      </div>
      <UserModal />
    </div>
  );
};

export default HomeHeader;
