import styles from './card.module.scss';

export type CardProps = {
  title?: string;
  content?: string | React.ReactNode;
  height?: string;
  width?: string;
};

export const Card = ({ title, content, height, width }: CardProps) => {
  return (
    <div
      style={{ height: height ?? '18rem', width: width ?? '18rem' }}
      className={styles.card}
    >
      <div className={styles.card_body}>
        {title && <h5 className={styles.card_title}>{title}</h5>}
        {content && <p className={styles.card_text}>{content}</p>}
      </div>
    </div>
  );
};
