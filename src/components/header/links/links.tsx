import { useMemo } from 'react';
import styles from './links.module.scss';
import { LogoGithubIcon } from '@primer/octicons-react';
import linkedInPic from '../../../assets/LinkedIn-Logos/LI-In-Bug.png';

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
    <div key={'links'} className={styles.links_list}>
      {options.map((i) => (
        <a key={i.name} href={i.link} target="_blank" rel="noopener noreferrer">
          {i.name === 'LinkedIn' && (
            <img
              src={linkedInPic}
              alt="linkedin"
              width={'30%%'}
              height={'30%'}
            />
          )}
          {i.name === 'GitHub' && <LogoGithubIcon size={100} />}{' '}
        </a>
      ))}
    </div>
  );
};
