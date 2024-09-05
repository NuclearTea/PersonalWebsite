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
            return <div key={i} style={{ height, width }} />;
          })}
        </div>
      );
    },
    [items]
  );

  const timeLineCirclesWithConnectors = useCallback(() => {
    return (
      <div className={styles.timeline_items}>
        {items.map((item, i) => (
          <div key={i} className={styles.timeline_circle_connector_container}>
            <Circle
              height="8rem"
              width="8rem"
              boxShadow="0 0.1rem 0.2rem rgba(0, 0, 0, 0.35)"
              content={item.date}
            />
            {i !== items.length - 1 ? ( // not last item
              <div className={styles.timeline_connector} />
            ) : (
              <div style={{ marginRight: '5rem' }} />
            )}
          </div>
        ))}
      </div>
    );
  }, [items]);
  return (
    <span className={styles.timeline}>
      {displayCards('even')}
      {timeLineCirclesWithConnectors()}
      {displayCards('odd')}
    </span>
  );
};
