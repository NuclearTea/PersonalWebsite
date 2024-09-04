import { LandingPageIds } from '../../const';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h4 className={styles.start}>Muhammad Ali</h4>
      <nav className={styles.end}>
        <a className={styles.text} href={`#${LandingPageIds.INTRO}`}>
          Intro
        </a>
        <a className={styles.text} href={`#${LandingPageIds.FULL_STACK}`}>
          Full Stack
        </a>

        <a className={styles.text} href={`#${LandingPageIds.EMBEDDED}`}>
          Embedded
        </a>
      </nav>
    </div>
  );
};
