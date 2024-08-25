import intro_pic from '../../assets/Intro_Picture.jpg';
import styles from './intro.module.scss';
export const Intro = () => {
  return (
    <div className={styles.intro}>
      <img src={intro_pic} className={styles.intro_pic} />
      <h2>Muhammad Ali</h2>
    </div>
  );
};
