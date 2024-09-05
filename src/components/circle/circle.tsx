import styles from './circle.module.scss';

export type CircleProps = {
  width?: string;
  height?: string;
  boxShadow?: string;
  content?: string | React.ReactNode;
};

export const Circle = ({ height, width, content, boxShadow }: CircleProps) => {
  return (
    <div
      style={{
        height: height ?? '7rem',
        width: width ?? '7rem',
        boxShadow,
      }}
      className={styles.circle}
    >
      {content}
    </div>
  );
};
