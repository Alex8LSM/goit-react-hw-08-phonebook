import { useSelector } from 'react-redux';

import Section from '../components/Section/Section';
import AuthNav from '../components/AuthNav/AuthNav';
import { getIsLoggedIn } from '../redux/auth/authSelector';
import styles from './Page.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Section className={styles.startFon}>
      {isLoggedIn ? (
        <p className={styles.titlePage}>Welcome in your Phone book.</p>
      ) : (
        <div className={styles.nav}>
          <h1 className={styles.mainTitle}>
            Welcome! This is a page for storing telephone contacts.
          </h1>
          <AuthNav />
        </div>
      )}
    </Section>
  );
}
