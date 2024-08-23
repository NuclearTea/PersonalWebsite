import { useCallback, useState } from 'react';
import styles from './header.module.scss';

export const Header = () => {
  const [hoverName, setHoverName] = useState(false);

  const handleMouseOver = useCallback(() => setHoverName(true), []);
  const handleMouseLeave = useCallback(() => setHoverName(false), []);
  return (
    <div>
      <div className={styles.header}>
        <h4
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className={styles.start}
        >
          Muhammad Ali
        </h4>
        <h4 className={styles.end}>Another 1</h4>
        <h4 className={styles.end}>Another 2</h4>
      </div>
      {hoverName && <h4>Another 3</h4>}
    </div>
  );
};
