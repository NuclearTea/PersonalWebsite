import styles from './header.module.scss';
import { Links } from './links/links';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h4 className={styles.start}>Muhammad Ali</h4>
      <Links />
    </div>
  );
};
