import { Card } from '../card/card';
import styles from './intro_card.module.scss';
import intro_pic from '../../assets/Intro_Picture.jpg';

export const IntroCard = () => {
  return (
    <Card
      content={
        <div className={styles.card_content}>
          <div className={styles.intro_text}>
            <h2 className={styles.title}>Hi, I'm Muhammad Ali</h2>
            <p className={styles.info}>
              I am a 5th year Computer Science student at the University of
              Calgary. I am passionate about full stack development and embedded
              systems
            </p>
          </div>
          <div className={styles.intro_pic_container}>
            <img alt="intro_pic" src={intro_pic} className={styles.intro_pic} />
          </div>
        </div>
      }
      height="100%"
      width="100%"
    />
  );
};