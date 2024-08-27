import { useCallback } from 'react';
import { Card } from '../card/card';
import { Circle } from '../circle/circle';
import styles from './timeline.module.scss';
import { TimelineProps } from './timeline.types';

export const Timeline = ({ items }: TimelineProps) => {
  const displayCards = useCallback(
    (evenOrOdd: 'even' | 'odd') => {
      const height = '20rem';
      const width = '20rem';
      return (
        <div className={styles.timeline_items}>
          {items.map((item, i) => {
            const card = (
              <Card
                key={`${evenOrOdd}-${item.title}`}
                height={height}
                width={width}
                title={item.title}
                content={item.content}
                border="none"
                titleSeparator="none"
              />
            );
            if (i % 2 === (evenOrOdd === 'even' ? 0 : 1)) {
              return card;
            }
            return <div style={{ height, width }} />;
          })}
        </div>
      );
    },
    [items]
  );
  return (
    <span className={styles.timeline}>
      {displayCards('even')}
      <div className={styles.timeline_items}>
        {Array.from({ length: items.length }, (_, i) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Circle height="8rem" width="8rem" content={items[i].date} />
            <div className={styles.timeline_connector} />
          </div>
        ))}
      </div>
      {displayCards('odd')}
    </span>
  );
};
