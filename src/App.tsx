import './App.css';
import { Header } from './components/header/header';
import { LandingPage } from './components/intro/landing_page';
import styles from './app.module.scss';

function App() {
  return (
    <>
      <Header />
      <div className={`${styles.landing_page_container} ${styles.example}`}>
        <LandingPage />
      </div>
    </>
  );
}

export default App;
