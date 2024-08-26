import styles from './circle.module.scss';

export type CircleProps = {
  width?: string;
  height?: string;
};

export const Circle = ({ height, width }: CircleProps) => {
  return (
    <div
      style={{
        height: height ?? '7rem',
        width: width ?? '7rem',
      }}
      className={styles.circle}
    />
  );
};
