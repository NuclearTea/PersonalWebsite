import { useMemo } from 'react';
import styles from './links.module.scss';
export const Links = () => {
  const options = useMemo(
    () => [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/muhammad-ali-6058b61aa/',
      },
      { name: 'GitHub', link: 'https://www.github.com/NuclearTea' },
    ],
    []
  );
  return (
    <ul className={styles.links_list}>
      {options.map((i) => (
        <a key={i.name} href={i.link} target="_blank" rel="noopener noreferrer">
          {i.name}
        </a>
      ))}
    </ul>
  );
};
