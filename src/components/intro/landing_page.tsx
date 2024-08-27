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
              {
                title: <div style={{ marginBottom: '0' }}>UDEAL</div>,
                content: (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <a
                      href="https://github.com/NuclearTea/UDeal"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        margin: '1rem',
                        marginTop: '0rem',
                      }}
                    >
                      <p>
                        The beginning of my full stack development journey
                        starts with a university project for my Database
                        Management Systems class. Udeal was a final project
                        which aimed to be a university student-only marketplace.
                        Users would sign up using their university credentials
                        (to verify their student status) and be able to post,
                        edit, and delete listings.
                      </p>
                      <h4>Click for more details</h4>
                    </a>
                  </div>
                ),
                date: 'April 2022',
              },
              { content: 'something else1', title: 'you1' },
              { content: 'something else2', title: 'you2' },
              { content: 'something else3', title: 'you3' },
              { content: 'something else4', title: 'you4' },
            ]}
          />
        }
        width="100%"
        height="fit-content"
        border="none"
        borderRadius="0"
      />
    </div>
  );
};
