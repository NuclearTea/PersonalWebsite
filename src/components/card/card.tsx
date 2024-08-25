import styles from './card.module.scss';

export type CardProps = {
  title: string;
  content: string | React.ReactNode;
};

export const Card = ({ title, content }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_body}>
        <h5 className={styles.card_title}>{title}</h5>
        <p className={styles.card_text}>{content}</p>
      </div>
    </div>
  );
};
