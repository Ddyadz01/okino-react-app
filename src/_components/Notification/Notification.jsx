import { Bell } from 'lucide-react';
import styles from './notification.module.scss';

const Notification = () => {
  return (
    <div className={styles.notifications}>
      <Bell />
    </div>
  );
};

export default Notification;
