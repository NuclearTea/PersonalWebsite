import styles from './landing_page.module.scss';
import { IntroCard } from './intro_card';
import { Card } from '../card/card';
import { Timeline } from '../timeline/timeline';

export const LandingPage = () => {
  return (
    <div className={styles.intro}>
      <IntroCard />

      <Card
        title={<h1 className={styles.title_text}>Full Stack Development</h1>}
        content={
          <Timeline
            items={[
              { content: 'hello', title: 'hello' },
              { content: 'something else', title: 'you' },
            ]}
          />
        }
        width="100%"
        height="fit-content"
      />
    </div>
  );
};
