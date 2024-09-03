import { LandingPageIds } from '../../const';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h4 className={styles.start}>Muhammad Ali</h4>
      <div className={styles.end}>
        <ul>
          <div className="styles end">
            <a className={styles.text} href={`#${LandingPageIds.FULL_STACK}`}>
              Full Stack
            </a>
          </div>
          <h4 className="styles end"></h4>
          <h4 className="styles end"></h4>
          <h4 className="styles end"></h4>
        </ul>
      </div>
    </div>
  );
};
