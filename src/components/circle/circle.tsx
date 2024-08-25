import styles from './circle.module.scss';

export type CircleProps = {
  width?: string;
  height?: string;
};

export const Circle = ({ height, width }: CircleProps) => {
  return (
    <div
      style={{
        height: height ?? '100px',
        width: width ?? '100px',
      }}
      className={styles.circle}
    />
  );
};
