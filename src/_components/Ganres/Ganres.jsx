import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { useDispatch, useSelector } from 'react-redux';

import { setGanre } from '../../store/filter/FilterSlice';

import GanresList from './GanresList';
import Button from '../Button/Button';

import styles from './ganres.module.scss';

const Ganres = ({ ganres }) => {
  const [showGaresModal, setShowGanresModal] = useState(false);
  const { ganre } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const toggleGanre = (title) => {
    dispatch(setGanre(title));
    setShowGanresModal(!showGaresModal);
  };

  return (
    <div className={styles.ganres}>
      <Button type={'primary'} onClick={() => setShowGanresModal(!showGaresModal)}>
        {ganre}
        {showGaresModal ? <ChevronUp /> : <ChevronDown />}
      </Button>
      {showGaresModal && (
        <GanresList styles={styles} ganres={ganres} activeGanre={ganre} toggleGanre={toggleGanre} />
      )}
    </div>
  );
};

export default Ganres;
