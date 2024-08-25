import { Card } from '../card/card';
import styles from './intro_card.module.scss';
import intro_pic from '../../assets/Intro_Picture.jpg';
import { useMemo } from 'react';
import linkedInPic from '../../assets/LinkedIn-Logos/LI-In-Bug.png';
import { LogoGithubIcon } from '@primer/octicons-react';

export const IntroCard = () => {
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
    <Card
      content={
        <div className={styles.card_content}>
          <div className={styles.intro_text}>
            <h2 className={styles.title}>Hi, I'm Muhammad Ali</h2>
            <p className={styles.info}>
              I am a 5th year Computer Science student at the University of
              Calgary. I am passionate about full stack development and embedded
              systems
            </p>
            <div className={styles.links}>
              {options.map((i) => (
                <>
                  <a
                    key={i.name}
                    href={i.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {i.name === 'LinkedIn' && (
                      <img
                        src={linkedInPic}
                        alt="linkedin"
                        width={'40rem'}
                        height={'30rem'}
                      />
                    )}
                    {i.name === 'GitHub' && <LogoGithubIcon size={40} />}{' '}
                  </a>
                </>
              ))}
            </div>
          </div>
          <div className={styles.intro_pic_container}>
            <img alt="intro_pic" src={intro_pic} className={styles.intro_pic} />
          </div>
        </div>
      }
      height="100%"
      width="100%"
    />
  );
};
