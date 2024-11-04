import styles from './usermodal.module.scss';

const UserModal = () => {
  return (
    <div className={styles.user__modal}>
      <img src="avatar.jpg" alt="" />
      <div className={styles.user__modal__info}>
        <p>Имя Фамилия</p>
        <span>admin@admin.ru</span>
      </div>
    </div>
  );
};

export default UserModal;
