import styles from './landing_page.module.scss';
import { IntroCard } from './intro_card';

export const Intro = () => {
  return (
    <div className={styles.intro}>
      <IntroCard />
    </div>
  );
};
