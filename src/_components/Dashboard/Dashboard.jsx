import { Link, useLocation } from 'react-router-dom';

import { links, userLinks } from './data.json';

import styles from './dashboard.module.scss';

const Dashboard = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__logo}>
        <img src="./logo2.png" />
        <p>
          O<span>`Kino</span>
        </p>
      </div>
      <div className={styles.dashboard__links}>
        {links.map((link) => (
          <Link
            to={link.pathName}
            key={link.id}
            className={pathname == link.pathName && 'link__active'}
          >
            {link.icon}
            {link.text}
          </Link>
        ))}
      </div>
      <div className={styles.dashboard__user_links}>
        {userLinks.map((link) => (
          <Link
            to={link.pathName}
            key={link.id}
            className={pathname == link.pathName && 'link__active'}
          >
            {link.icon}
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
