import { Card } from '../card/card';
import { Circle } from '../circle/circle';
import styles from './timeline.module.scss';
import { TimelineProps } from './timeline.types';

export const Timeline = ({ items }: TimelineProps) => {
  // const evenItems= items.filter((_item, i) => i % 2 === 0);
  // const oddItems = items.filter((_item, i) => i % 2 === 1);
  return (
    <span className={styles.timeline}>
      <div className={styles.timeline_items}>
        {items.map((item, i) => {
          const card = <Card height="5rem" width="20rem" title={item.title} />;
          if (i % 2 === 0) {
            return card;
          }
          return <div style={{ height: '5rem', width: '20rem' }} />;
        })}
      </div>
      <div className={`${styles.timeline_items} `}>
        {Array.from({ length: items.length }, () => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              //   gap: '1rem',
            }}
          >
            <Circle height="8rem" width="8rem" />
            <div
              style={{
                height: '1rem',
                width: '15rem',
                backgroundColor: 'blue',
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.timeline_items}>
        {items.map((item, i) => {
          const card = <Card height="5rem" width="20rem" title={item.title} />;
          if (i % 2 === 1) {
            return card;
          }
          return <div style={{ height: '5rem', width: '20rem' }} />;
        })}
      </div>
    </span>
  );
};
