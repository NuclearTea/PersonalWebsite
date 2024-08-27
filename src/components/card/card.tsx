import styles from './card.module.scss';

export type CardProps = {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  height?: string;
  width?: string;
  boxShadow?: string;
  border?: string;
  borderRadius?: string;
  titleSeparator?: string;
};

export const Card = ({
  title,
  content,
  height,
  width,
  boxShadow,
  border,
  borderRadius,
  titleSeparator,
}: CardProps) => {
  return (
    <div
      style={{
        height: height ?? '18rem',
        width: width ?? '18rem',
        boxShadow,
        border,
        borderRadius,
      }}
      className={styles.card}
    >
      <div className={styles.card_body}>
        {title && (
          <div
            style={{ borderBottom: titleSeparator }}
            className={styles.card_title}
          >
            {title}
          </div>
        )}
        {content && <div className={styles.card_text}>{content}</div>}
      </div>
    </div>
  );
};
