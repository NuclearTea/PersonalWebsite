import { ReactElement, useCallback, useState } from 'react';
import styles from './tooltip.module.scss';
export type TooltipProps = {
  content: ReactElement;
  title: string | ReactElement;
};

export const Tooltip = (props: TooltipProps) => {
  const [contentVisible, setContentVisible] = useState(false);
  console.log('🚀 ~ Header ~ contentVisible:', contentVisible);

  const handleMouseOver = useCallback(() => setContentVisible(true), []);
  const handleMouseLeave = useCallback(() => setContentVisible(false), []);

  return (
    <div className={styles.tooltip_container}>
      <div onMouseEnter={handleMouseOver} className={styles.tooltip_title}>
        {props.title}
      </div>
      {contentVisible && (
        <div onMouseLeave={handleMouseLeave} className={styles.tooltip}>
          {props.content}
        </div>
      )}
    </div>
  );
};
