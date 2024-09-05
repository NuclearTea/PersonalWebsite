import { Card } from '../card/card';
import styles from './intro_card.module.scss';
import intro_pic from '../../assets/Intro_Picture.jpg';
import { Links } from '../header/links/links';
import { LandingPageIds } from '../../const';

export const IntroCard = () => {
  return (
    <div className={styles.intro_card_container} id={LandingPageIds.INTRO}>
      <Card
        content={
          <div className={styles.card_content}>
            <div className={styles.intro_text}>
              <h2 className={styles.title}>Hi, I'm Muhammad Ali</h2>
              <p className={styles.info}>
                I am a Computer Science student at the University of Calgary. I
                am passionate about full stack development and embedded systems.
              </p>
              <div className={styles.links}>
                <Links />
              </div>
            </div>
            <div className={styles.intro_pic_container}>
              <img
                alt="intro_pic"
                src={intro_pic}
                className={styles.intro_pic}
              />
            </div>
          </div>
        }
        height="100%"
        width="100%"
        border="none"
        borderRadius="0"
      />
    </div>
  );
};
