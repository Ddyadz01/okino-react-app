import { SearchIcon } from 'lucide-react';
import styles from './search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search film" />
      <SearchIcon />
    </div>
  );
};

export default Search;
