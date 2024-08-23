import styles from './header.module.scss';
import { Tooltip } from '../tooltip/tooltip';
import { Links } from './links/links';

export const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.start}>
          {/* <Tooltip title={<h4>Muhammad Ali</h4>} content={<Links />} /> */}
          <h4>Muhammad Ali</h4>
        </div>
        <Links />
        {/* <h4 className={styles.end}>Another 1</h4>
        <h4 className={styles.end}>Another 2</h4> */}
      </div>
    </div>
  );
};
