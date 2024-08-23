import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h4 className={styles.start}>Muhammad Ali</h4>
      <h4 className={styles.end}>Another 1</h4>
      <h4 className={styles.end}>Another 2</h4>
    </div>
  );
};
