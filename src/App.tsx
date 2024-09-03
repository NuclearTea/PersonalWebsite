import { Header } from './components/header/header';
import { LandingPage } from './components/intro/landing_page';
import styles from './app.module.scss';

function App() {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.landing_page_container}>
        <LandingPage />
      </div>
    </>
  );
}

export default App;
